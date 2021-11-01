import { LightningElement } from 'lwc';

import showAllTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';


export default class TopicDetailParent extends LightningElement {

    
    _SFTopics;

    //Event handler for event received from child
    handleShowTopicsAllEvent(event)
    {

        //Read the values came from child compoent
        const allTopiclst = event.detail.alltopiclist;
        
        alert('allTopiclst:' + allTopiclst);

        /*
            1. Create an APEX class and APEX method (@auraenable(cacehable true)) - DONE
            2. Fetch all training topics from DB - DONE
            3. Import method name from APEX class.methodname & Make a call - DONE
            4. Process the result and show inside a nice lightning component
        */

        //Calling APEX method imperatively
        showAllTrainingTopics()
        .then((result) => {
                // Store the result in a property
                // Use the propery in HTML and show all topics
                this._SFTopics = result;
        })
        .catch((error) => {
            alert("Error occured");
        });


        


    }

}