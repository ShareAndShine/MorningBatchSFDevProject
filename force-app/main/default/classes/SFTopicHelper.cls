public with sharing class SFTopicHelper {
  

    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getSFTrainingTopics() {

        return [SELECT ID,Topic_Name__c, Topic_Category__c FROM SF_Training_Topic__c WITH SECURITY_ENFORCED];
        
    }
    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getSFTrainingTopicsByCategory(string strCat) {

        strCat = strCat + '%';
        return [SELECT ID,Topic_Name__c, Topic_Category__c FROM SF_Training_Topic__c WHERE
                Topic_Category__c  like :strCat WITH SECURITY_ENFORCED];
        
    }
}
