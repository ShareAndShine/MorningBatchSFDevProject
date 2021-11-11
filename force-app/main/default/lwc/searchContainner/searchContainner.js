import { LightningElement } from 'lwc';

export default class SearchContainner extends LightningElement {

    _searchCatInput; 
    searchcategoryeventhandler(event)
    {
        this._searchCatInput = event.detail.searchCat;
    }
}