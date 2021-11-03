import { LightningElement } from 'lwc';

export default class LifeCycleDemo extends LightningElement {

    // Method 1: Plain and simple
    _title;


    // MEthod 2 : Using get and set
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    // MEthod 2 : Using get and set
    get title_2() {
        return this._title_2;
    }
    set title_2(value) {

        console.log("Original Value:" + value);
        if(value == "Cat")
        {
            value = "Cat is replaced with Dog !!!!"
        }
        this._title_2 = value;
    }

    

    connectedCallback()
    {

        console.log("I am here: Connected call back");
       
        // Use me to open or listen to any pub sub event listeners
        // USe me to to open server or DB or API connections

    }

    renderedCallback()
    {
        console.log("I am here: rendered  call back");
        this._title = "Rendered call back has sent a message !!!!"; // Assign a value to the property
        this.title_2 = "Cat";
        // Use me to alter DOM elements or properties after component is rendered completely 


    }

    disconnectedCallback()
    {
        console.log("I am here: disconnected call back");
        // Use me to close any pub sub event listeners
        // USe me to close any open server or DB or API connections

        
         
    }
}