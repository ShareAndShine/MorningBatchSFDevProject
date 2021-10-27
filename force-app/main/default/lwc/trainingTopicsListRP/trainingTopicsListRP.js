import { LightningElement, wire } from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';

export default class TrainingTopicsListRP extends LightningElement {

    SFAllTrainingTopics = '';
    recordExists = true;

    @wire(fetchSFTrainingTopics)
    loadTrainingTopics({data,error})
    {
        this.SFAllTrainingTopics = data; //Assing APEX output to a local property then bind to HTML
        this.recordExists = data != null ? true: false;
    }
    

}