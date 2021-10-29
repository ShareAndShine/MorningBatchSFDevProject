import { LightningElement, wire } from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';
import InsertSFTopics from '@salesforce/apex/SFTopicHelper.InsertSFTopics';

export default class TrainingTopicsListRP extends LightningElement {

    SFAllTrainingTopics = '';
    recordExists = true;

    @wire(fetchSFTrainingTopics)
    loadTrainingTopics({data,error})
    {
        this.SFAllTrainingTopics = data; //Assing APEX output to a local property then bind to HTML
        this.recordExists = data != null ? true: false;
    }

    connectedCallback()
    {
        //alert('Inside connected call back')
        InsertSFTopics({strName : "Default Functions", strCat : "Javascript",  strInstructor : "Rajesh"})
        .then((result) => {})
        .catch((error) => {console.log(JSON.stringify(error));})
    }
    

}