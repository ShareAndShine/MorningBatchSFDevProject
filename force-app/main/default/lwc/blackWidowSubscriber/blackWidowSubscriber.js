import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'; // To get current page reference and use in checing components reference 

import { registerListener,  unregisterAllListeners} from 'c/pubsub'; // Import lister methods for subscribers

export default class BlackWidowSubscriber extends LightningElement {

    // Find the current page using @wire
    @wire(CurrentPageReference) 
    pageRef;

    _msgFromAvengerTeam = "Waiting to receive msg from Avenger's console !!!!";
  
    // Listen to the frequency or msg event from Publisher
    
    connectedCallback()
    {
        // 1st parameter - msgtosubscribers - event that was published by publisher
        // 2nd parameter - As soon as you receive a msg from pub, hand it over to another method to process 
        registerListener('msgtosubscribers', this.processMessage, this);
        //alert('connected call back');

        //alert("Subscriber component Pageref:" + JSON.stringify(this.pageRef));
    }

    processMessage(payload)
    {
        //console.log("Subscriber component Pageref:" + pageRef);
        //console.log("Payload as received by subscriber :::" + payload);

        this._msgFromAvengerTeam = payload;

    }
}