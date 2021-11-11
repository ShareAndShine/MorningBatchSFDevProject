import { LightningElement, wire, track } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi'; // This is for delete account using uiRecordAPI
import { refreshApex } from '@salesforce/apex';

// Import APEX method reference that gets me top 5 accounts
import getLatestAccounts from '@salesforce/apex/AccountController.getAccountList'; 
import ContactMobile from '@salesforce/schema/Case.ContactMobile';

// This is to feed columns list into data table component
const COLS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Stage', fieldName: 'Phone', type: 'text' },
    { label: 'Amount', fieldName: 'Industry', type: 'text' }
  ];

export default class CacheBurstDemo extends LightningElement {
  
   cols = COLS;
   selectedRecord; // Hold selected account record from the table
   accountList = []; // Hold top 5 accounts retrieved from DB 
   error; // hold error data
   wiredAccountList = []; // Holds top 5 accounts

   // Make a call to APEX method and get top 5 accounts
   @wire(getLatestAccounts) accList(result) {
    this.wiredAccountList = result;

    if (result.data) {
      this.accountList = result.data;
      this.error = undefined;
    } else if (result.error) {
      this.error = result.error;
      this.accountList = [];
    }
  }

  handelSelection(event) {
    if (event.detail.selectedRows.length > 0) {

      console.log("Current selected account ID:" + event.detail.selectedRows[0].Id);
      this.selectedRecord = event.detail.selectedRows[0].Id;
    }
  }

  // MEthod called when delete account is cliced
  deleteRecord() {
    deleteRecord(this.selectedRecord)
      .then(() => {
        // Successfully deleted
        refreshApex(this.wiredAccountList); // Refresh the APEX page especially the property that holds data when retreived and cached in the wire method
        
        console.log('Success');
      })
      .catch(error => {
        console.log('Error')
      })
  }
}