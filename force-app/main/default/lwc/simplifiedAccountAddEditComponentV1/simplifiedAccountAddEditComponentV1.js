import { LightningElement, api } from 'lwc';
//Get the object schema
import ACC_OBJ from '@salesforce/schema/Account';

//Get the fields
import ACC_NAME from '@salesforce/schema/Account.Name';
import ACC_TYPE from '@salesforce/schema/Account.Type';
import ACC_PHONE from '@salesforce/schema/Account.Phone';
import ACC_WEBSITE from '@salesforce/schema/Account.Website';

export default class SimplifiedAccountAddEditComponentV1 extends LightningElement {

    // In Parent to child components communication,
    // Child expose a public propery using @api and  parent will inturn send the  data 
    
    @api recordId;  

    @api objectApiName;


    fields  = [ACC_NAME, ACC_TYPE, ACC_PHONE, ACC_WEBSITE];

    connectedCallback()
    {
        console.log("recordID::" + this.recordId);
        console.log("objectApiName::" + this.objectApiName);
        
    }
}