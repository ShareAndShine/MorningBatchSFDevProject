import { LightningElement } from 'lwc';

export default class TrainingTopicsList extends LightningElement {


    numbers = [1,2,3,4,5,6];

    SFTopicsArr = [

        { topicName : "Java script fundamentals",topicCategory : "Javascript"}, // object 1 or record 1
        { topicName : "JS Module",topicCategory : "Javascript"},
        { topicName : "Triggers",topicCategory : "APEX"},
    ];

    
    recordExists = SFTopicsArr.length > 0 ? true: false; 


    // Convert the above array of objects into a string so I can see readble date on the page
    // SFTopicsArrConverted =  JSON.stringify(SFTopicsArr);
}