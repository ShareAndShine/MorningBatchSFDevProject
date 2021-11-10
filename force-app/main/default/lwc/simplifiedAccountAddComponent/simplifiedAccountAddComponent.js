import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

import ACCOUNT_OBJ from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

import CON_OBJ from '@salesforce/schema/contact'; // Refer contact object schema
import TT_OBJ from '@salesforce/schema/SF_Training_Topic__c'; // Refer SF Training Topic object schema

// Refer SF Training Topic object schema and topic category
import TT_CAT from '@salesforce/schema/SF_Training_Topic__c.Topic_Category__c'; 




// Show Toast event
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class SimplifiedAccountAddComponent extends LightningElement {

    
    _accName = "";

    _accId ="";

    @api strTitle= "Create Account - Simplified";
    
    createAccountHandler()
    {
        // Logic to insert a new account
        // 1. Get account name input from the user
        // 2. Make a call to UiREcordAPI
        // 3. Pass the parameters (account name)
        // 4. Get the response

        this._accName = this.template.querySelector('lightning-input[data-name="inpAccName"]').value; 

        // Use objet array to hold all the fields
        const fields={};

        //  Add user entered value to fields object array and pass it on to uiRecordAPI
        fields[ACCOUNT_NAME.fieldApiName] = this._accName;

        // Form a record input for uiRecordAPI
        const recordInput = {

            apiName :ACCOUNT_OBJ.objectApiName,
            fields : fields
        };

       
        
         // Make a call to uiRecordAPI
        createRecord(recordInput)
        .then(account => {
            // Handle success where u can read just inserted new account record 

            console.log("Account insert on success::" + JSON.stringify(account));
            this._accId = account.id;

            // Read user that created the account
            //`const createdby = account.user.id;

            // On success show a messasge
            const successevt = new ShowToastEvent(
                {
                    title: 'Success',
                    message: 'Account has been successfully created - ' + this._accId,
                    variant: 'success'

                }
            );

            this.dispatchEvent(successevt);

        })
        .catch(error => {
            console.log("erorr::" + error.body.message);

            // On error show a messasge
            const failuresevt = new ShowToastEvent(
                {
                    title: 'Failed to create record',
                    message: 'Something is wrong. Please reach out to admin - ' +  error.body.message,
                    variant: 'error'

                }
            );

            this.dispatchEvent(failuresevt);
        })

    }

    keyDownValidationHandler(evt)
    {
        // Check key press code for all special character and return false 
        // to prevent users from entering special character in name field
        
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            
            return false;
        }
        else
        {
            alert('You cannot enter numbers in account name !!!');
        
        }
        
        return true;

    }
}