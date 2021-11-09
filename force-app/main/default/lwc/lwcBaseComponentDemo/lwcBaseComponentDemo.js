import { LightningElement, api } from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';
import fetchSFTrainingTopicsByCategory from '@salesforce/apex/SFTopicHelper.getSFTrainingTopicsByCategory';
import  { NavigationMixin } from 'lightning/navigation';

export default class LwcBaseComponentDemo extends NavigationMixin(LightningElement) {


    SFAllTrainingTopics_method3;

    @api recordId;

    @api objectApiName;

    showAllTrainingTopics()
    {

        fetchSFTrainingTopics()
        .then((result) => {this.SFAllTrainingTopics_method3 = result})
        .catch((error) => {this._error = error})      
        
    }

    connectedCallback()
    {
        console.log('recordId is::' + this.recordId);
        console.log('objectApiName is::' + this.objectApiName);
        
    }

    creaetTrainingTopic()
    {
        // Step 1: Import NAvigation Mixin
        // Step 2: Extend the class -  NavigationMixin(LightningElement)
        // Step3: Call NAvigation ,mixin to open a page

        this[NavigationMixin.Navigate](

            {
                type : 'standard__objectPage',
                attributes:
                {
                    objectApiName :'SF_Training_Topic__c',
                    actionName: 'new'
                }
            }

        );

    }

    navigateToAmazon()
    {
        //event.preventDefault();
        // Step 1: Import NAvigation Mixin
        // Step 2: Extend the class -  NavigationMixin(LightningElement)
        // Step3: Call NAvigation ,mixin to open a page

        this[NavigationMixin.Navigate](

            {
                type : 'standard__webPage',
                attributes:
                {
                    url: 'https://www.amazon.in/s?k=lwc+salesforce&crid=2VWG6I09MJOEH&sprefix=lwc%2Caps%2C369&ref=nb_sb_ss_ts-doa-p_4_3'
                }
            }

        );
    }

}