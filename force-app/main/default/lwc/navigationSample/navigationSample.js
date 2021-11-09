import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationSample extends NavigationMixin(LightningElement) {


    handlewebPage()
    {

        this[NavigationMixin.Navigate](
            {
                type: 'standard__webPage',
                attributes:
                {
                    url:'https://webcomponents.dev/create/lwc'
                }
            }
        );
    }

    // <!-- Navigate to home Page -->
    handlAccountHomePage()
    {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:
                {
                    objectApiName: 'Account',
                    actionName: 'home'

                }
            }
        );
    }


    // <!-- Navigate to contact create Page -->
    handlCreateNewContact()
    {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:
                {
                    objectApiName: 'Contact',
                    actionName: 'new'

                }
            }
        );
    }

    //<!-- Navigate to single contact page based on unique id (0035g000004snoBAAQ) -->
    handleViewContact()
    {
        this[NavigationMixin.Navigate](
        {
            type: 'standard__recordPage',
            attributes:
            {
                recordId: "0039D00000EJZCMQA5",
                objectApiName: 'Contact',
                actionName: 'view'

            }
        }
    );

    }

    // <!-- Navigate to single contact page based on unique id (0035g000004snoBAAQ) - EDIT mode -->
    handleEditContact()
    {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__recordPage',
                attributes:
                {
                    recordId: "0039D00000EJZCMQA5",
                    objectApiName: 'Contact',
                    actionName: 'edit'
    
                }
            }
        );
    }

    // <!-- Navigate to SF training topics list -->
    handleViewTrainingTopics()
    {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:
                {                    
                    objectApiName: 'SF_Training_Topic__c',
                    actionName: 'list'
    
                }
            }
        );
    }
}