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

    @AuraEnabled
    public static void InsertSFTopics(string strName, string strCat, string strInstructor) {

        SF_Training_Topic__c newTopic = new SF_Training_Topic__c();
        newTopic.Topic_Name__c = strName;
        newTopic.Topic_Category__c = strCat;
        newTopic.Instructor__c = strInstructor;
        
        insert newTopic;        
        
    }
}
