import { LightningElement, api } from 'lwc';

export default class TopicTile extends LightningElement {

    @api topic;

    @api topicSelectedId;
    
    tilecss = "tile";

    
    get isTopicSelected() {
        if(this.topic.Id === this.topicSelectedId)
        {
            return "tileselected"
        }
        return "tile";
    }
    
    clickHandler()
    {
        
        // Find the selected topic id
        const topicId = this.topic.Id;

        
        // Send selected id to parent component (topicResult)
        const topicSelect = new CustomEvent("topicselect",{detail:topicId});
        this.dispatchEvent(topicSelect);

        
        
    }

    connectedCallback()
    {
        console.log("topic - connected::" + JSON.stringify(this.topic));
    }

    renderedCallback()
    {
        console.log("topic - rendered::" + JSON.stringify(this.topic));
    }
    
    get topicCategory() {
        return this._topicCategory;
    }
    set topicCategory(value) {
        this._topicCategory = value;
    }

    get topicName() {
        return this._topicName;
    }
    set topicName(value) {
        this._topicName = value;
    }

    get instructor() {
        return this._instructor;
    }
    set instructor(value) {
        this._instructor = value;
    }
    

}