import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub'; // Import Fireevent method from lib
import { CurrentPageReference } from 'lightning/navigation'; // To get current page reference and use in checing components reference 

export default class AvengersConsole extends LightningElement {


    _msgToSubscribers = "New mission to find Thanos !!!!.. Come to base at once !!!";

    // Find the current page using @wire
    @wire(CurrentPageReference) 
    pageReference;

    sendMessagehandler()
    {
        // As a publisher...Fire event to all subscribers
        fireEvent(this.pageReference, 'msgtosubscribers', this._msgToSubscribers);
    }

}