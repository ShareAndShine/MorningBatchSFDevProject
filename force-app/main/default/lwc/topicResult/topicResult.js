//Ref: https://www.salesforcepoint.com/2020/08/lwc-refresh-apex-Example.html

import { LightningElement, api, wire } from 'lwc';
import fetchSFTrainingTopicsByCategory from '@salesforce/apex/SFTopicHelper.getSFTrainingTopicsByCategory';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';


export default class TopicResult extends LightningElement {

    // Get category that user is searching for from parent component (search Container)
    @api category;

    _topicsResult = [];

    _selectedtopicid;
    
    _wiredtopicsResult = [];

   // Call APEX method and  retrieve topics
    @wire(fetchSFTrainingTopicsByCategory, {strCat: '$category'})
    loadTopicsResult(result)
    {
        this._wiredtopicsResult = result;

        //console.log("category:" + $category);
        console.log("category:" + this.category);
        
        console.log("data:" + JSON.stringify(result.data));
        //console.log(`data:${data}`);
        
        if(result.data != null)
        {
            // Assign to propert to bind in HTML
            this._topicsResult = result.data;
        }
        else if(result.error !=null)
        {
            console.log(JSON.stringify(result.error));
            this.showToast('ERROR', result.error.body.message, 'error');
        } 

    };

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    topicselectHandler(event)
    {

        this._selectedtopicid =  event.detail.topicId;


    }

    connectedCallback()
    {
        
        //refreshApex(this._topicsResult); // Not working ?? check again 
        console.log("Topic result - Connected call back- this._topicsResult" + JSON.stringify(this._topicsResult));
    }

    renderedCallback()
    {
        refreshApex(this._wiredtopicsResult); 
        console.log("Topic result - Rendered call back- this._topicsResult" + JSON.stringify(this._topicsResult));
    }
}