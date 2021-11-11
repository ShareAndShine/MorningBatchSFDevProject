import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class TopicSearch extends NavigationMixin(LightningElement) {

    _searchCat = "";

    
    createNewTrainingTopic()
    {
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:
                {
                    objectApiName: 'SF_Training_Topic__c',
                    actionName: 'new'

                }
            }
        );

        
        

    }

    showAllTrainingTopicsByCat()
    {
        
        // Read input as entered by the user
        this._searchCat = this.template.querySelector('lightning-input[data-name="inputCat"]').value;

        console.log("this._searchCat::" + this._searchCat);
        
        // Raise an event to parent component  and pass search key word 
        // so that parent component(searchContainner) will inturn pass the same to 
        // Child component(topicResult)

        const SearchCatEvent = new CustomEvent("searchcategoryevent", {
            detail : { searchCat : this._searchCat } 
        });

        //Dispatch the event to parent
        this.dispatchEvent(SearchCatEvent);
    }

}