public with sharing class newsController {
    public newsController() {

    }

    @AuraEnabled
    public static Map<String, Object> retriveNews(){
        
        HttpRequest httpReq = new HttpRequest();
        httpReq.setEndpoint('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2d036a5806d54c36b1f2d50e2002ec19');
        httpReq.setMethod('GET');

        Map<String, Object> newsJsonData = new Map<String, Object>();
        String strResponse = null;
        

        try {

            Http oHttp  = new Http();
            HttpResponse httpResponse = oHttp.send(httpReq);
            if(httpResponse.getStatusCode() == 200){
                strResponse = httpResponse.getBody();
            } else {
                throw new CalloutException(httpResponse.getBody());
            }


    
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        if(!String.isBlank(strResponse)){
            newsJsonData = (Map<String, Object>)JSON.deserializeUntyped(strResponse);
        }
        if(!newsJsonData.isEmpty()){
            return newsJsonData;
        } else {
            return null;
        }
    }
 
}
