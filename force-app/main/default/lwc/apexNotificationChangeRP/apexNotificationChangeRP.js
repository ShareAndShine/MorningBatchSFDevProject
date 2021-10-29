import { LightningElement, wire } from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';
import addTrainingTopic from '@salesforce/apex/SFTopicHelper.InsertSFTopics';

import { refreshApex } from '@salesforce/apex';

export default class ApexNotificationChangeRP extends LightningElement {

    recordExists = true;
    error= "";

    _name;
    _category;
    _instructor;

    @wire(fetchSFTrainingTopics)
    LoadTrainingTopics({data, error})
    {
        this.SFAllTrainingTopics = data;
        console.log("this.SFAllTrainingTopics::" + this.SFAllTrainingTopics);
        this.error = error;

        this.recordExists = data !=null ? true : false; 
    }

    addTrainingTopic()
    {

        this._name= this.template.querySelector('lightning-input[data-name="inpName"]').value;
        this._category= this.template.querySelector('lightning-input[data-name="inpCategory"]').value;
        this._instructor= this.template.querySelector('lightning-input[data-name="inpInstructor"]').value;
        
        // Make a call to APEX method imperatively by passing inputs 
        addTrainingTopic({strName : this._name, strCat : this._category,  strInstructor : this._instructor})
        .then((result) => {alert('Added new topic !!!')})
        .catch((error) => {alert(JSON.stringify(error));})


        //Display fresh data 
        //refreshApex(this.SFAllTrainingTopics)
    }
}