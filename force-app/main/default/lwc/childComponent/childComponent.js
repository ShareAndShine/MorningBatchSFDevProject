import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    /*
        1. For Parent to Child comms - use @api
        2. In Child component, use @api agannist a propery or a function
        3. In Parent component, add the child component in HTML (use Kebab case)
        4. In Parent component use child property as ATTRIBUTES and share data  
    */
    
    @api john ;//= "I am a John. Waiting for a msg from my father!!!!"; 
    
    @api lara ;//= "I am a Lara. Waiting for a msg from my father!!!!"; 

    @api ben ;//= "I am a Ben. Waiting for a msg from my father!!!!"; 

    @api title;
    

    _johnMessage;
    _laraMessage;

    SendMessagetoParent()
    {
        //alert("Yet to write logic for sending msg to parent component using events !!! ")

        /*
            1. In child component, Read message from inout text boxes - DONE
            2. In child component, Create a custom event and attach all data to be passed on  - DONE
            3. In child component, Dispatch the event  - DONE
            4. In parent component, receive the event and the data being passed on- DONE
            5. In parent componet, start using the data as received - DONE

        */


        // Read inputs
        this._johnMessage =  this.template.querySelector('lightning-input[data-name="john"').value;
        this._laraMessage=  this.template.querySelector('lightning-input[data-name="lara"').value;

        alert( this._johnMessage);
        alert(this._laraMessage);

        // create a custom event
        // Give a name
        // Use detail parameter to send whatever data u wanted to send to parent component
        const sendmessagetofatherevent = new CustomEvent("sendmessagetofather", {
            detail : { johnmsg : this._johnMessage, laramsg : this._laraMessage }
        });


        //Dispatch the event to parent
        this.dispatchEvent(sendmessagetofatherevent);
    }

}