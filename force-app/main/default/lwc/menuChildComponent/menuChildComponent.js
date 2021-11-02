import { LightningElement } from 'lwc';

export default class MenuChildComponent extends LightningElement {

    _IsAllTopic = false;
    
    showAllTrainingTopics()
    {
         /*
           From Child to Parent - Use Events
            1. In child component, Prepare parameters or data to be passed on to parent  - DONE
            2. In child component, Create a custom event and attach all data to be passed on - DONE
            3. In child component, Dispatch the event  - DONE
            4. In parent component, receive the event . Use event name in the HTML Attribute and the data that was passed on in JS file
            5. In parent componet, start using the data as received

        */

        // Set  _IsAllTopic to true
        this._IsAllTopic = true;
;
        const showAllTopicevent =  new CustomEvent("searchalltopics",
        {
            detail :{ alltopiclist : this._IsAllTopic }
        });

        //Dispatch the event to parent
        this.dispatchEvent(showAllTopicevent);

        
        
       

    }

    showAllTrainingTopicsByCat()
    {
        alert("Yet to implement !!!! I need to inform that user wants to see search topics by the category and show in another component(parent) !!!!")
    }

}