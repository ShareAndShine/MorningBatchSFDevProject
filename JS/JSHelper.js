// Print a msg on console
console.log("Hi !!! print me on browser developer console !!!")

// Variables

TrainingTopic = "Javascript training is on !!!";
console.log(TrainingTopic);

TrainingTopic = "Javascript training is on - Day 1 !!!";
console.log(TrainingTopic);

// I dont want anyone to change this
const pi = 3.14;
const evennumbers = [2,4,6,8,10];
console.log("Pi is::" + pi);

//pi = 2.1; // Errors out 
//console.log("Pi is::" + pi);

// evennumbers = [2,4,6,8,10,11]; // Errors out 

// var
for(var i = 0; i<10; i++)
{

}
console.log("Using var - The value of i is ::" + i);

//let
for(let j = 0; j<10; j++)
{
    //console.log("Using let - The value of j is ::" + j);
}
//console.log("Using let - The value of j is ::" + j); // Errors out as the scope is just within for loop


console.log(" Hey i ...aru u still exisits? " + i);


// Data type 
//Boolean, Number, String , Object , Array, set, Map,  null, undefined
let  TopicTainnner = "Rajesh";
console.log(typeof TopicTainnner); 

let pivalue = 3.14;
console.log(typeof pivalue); 

let pivalueexpoential  = 3.14e5;
console.log(typeof pivalueexpoential); 

let IamNothing = undefined;
console.log(IamNothing); 
console.log(typeof IamNothing); 

// String concat
let topicCategory = "JAvascript";
let topicName = "JS Fundamentals";
// Way 1
console.log("The topic " + topicName + " has been categorized under " +
                topicCategory + " !!!");

// Way 2
console.log(`The topic ${topicName} has been categorized under ${topicCategory} !!!`);


const value1 = 6;

const value2 = "6"; // SET ON STONE
//value2 = "8"; // Error out
console.log(typeof value2);

// comparison 
const x = "6"; 
const y  = 6; 
console.log("Are we equal x==y::" + x==y); // general 
console.log("Are we equal x===y::" + x===y); // strict comparison


// Objects
const SFTopics0 = {
    topicName : "Java script fundamentals",
    topicCategory : "Javascript"
};
console.log("Who am I - SFTopics?? : " + typeof SFTopics0); // Object
console.log("SFTopics?? : " + SFTopics0); // [object object]
console.log("SFTopics - with values : " + JSON.stringify(SFTopics0));

// Say, we want to hold multiple topics
// Approach 1 - Not scable when we want to hold lot of topics

const SFTopics1 = {
    topicName : "APEX fundamentals",
    topicCategory : "APEX Programming"
};

const SFTopics2 = {
    topicName : "Triggers",
    topicCategory : "APEX Programming"
};



// Approach 2: Use class and objects together

class SFTopics{

    
    constructor(TopicName, TopicCategory) //Main entry
    {
        this._topicName = TopicName,
        this._topicCat = TopicCategory
    }
    
    /* 
    // With no constructor model
    _topicName = "";
    _topicCat ="";

    getInput(TopicName, TopicCategory)
    {
        this._topicName = TopicName;
        this._topicCat = TopicCategory;
    }*/
   
    getMeTypeofClass()
    {
        console.log("Who am I - SFTopics ?:" + typeof SFTopics);
    }

    getTopicDetails()
    {
        // Pring name and cat
        console.log(`The topic ${this._topicName} has been categorized 
                        under ${this._topicCat} !!!`);

    }

}

// Set a new topic by creating an object
let SFTop1 = new SFTopics("Java script fundamentals", "Javascript");
SFTop1.getTopicDetails();

let SFTop2 = new SFTopics("APEX fundamentals", "APEX Programming");
SFTop2.getTopicDetails();

let SFTop3 = new SFTopics("Triggers", "APEX Programming");
SFTop3.getTopicDetails();

let SFTop4 = new SFTopics("Triggers");
SFTop4.getTopicDetails();


/* With no constructor
let SFTop5 = new SFTopics();
SFTop5.getInput("Java script fundamentals", "Javascript");
SFTop5.getTopicDetails();
*/

// functions - Method 1
function addTopics(TopicName, TopicCategory)
{
    console.log(`The topic ${TopicName} has been categorized 
                        under ${TopicCategory} !!!`);
}
addTopics("Process Builder", "SF Admin");




// functions - Method 2
const addTopics_2 = function(TopicName, TopicCategory)
{
    console.log(`The topic ${TopicName} has been categorized 
    under ${TopicCategory} !!!`);
};
addTopics_2("Flow", "SF Admin");

//function - Method 3

const addTopics_3 = (TopicName, TopicCategory) =>
{
    console.log(`The topic ${TopicName} has been categorized 
    under ${TopicCategory} !!!`);
};
addTopics_3("Work Flow", "SF Admin");   




// Set 
let SFTopic_s = new Set();
SFTopic_s.add("JS Basics");
SFTopic_s.add("JS Basics");
SFTopic_s.add("LWC");
SFTopic_s.add("Trigger");

console.log("Hi there !!! I am learning set collections in JS - Print SFTopic_s::" 
                + SFTopic_s.keys());

console.log("Hi there !!! I am learning set collections in JS - Print SFTopic_s::" 
+ SFTopic_s.has("LWC"));


// Map
let SFTopic_p = new Map();
SFTopic_s.add("Javascript", "JS Basics");
SFTopic_s.add("Javascript - Advacned", "ES6");
SFTopic_s.add("LWC", "Comp bundles");


// TODO
// Array
// For loop and For each
// ES6 destructing syntax
// JS modules


// Array
const numbers = [1,2,3,4,5];
const veggie = ["Onion", "Tomatao", "Carrot"]

// when u deal with arrays u will use square bracket []
// when u deal with objects u will use curly braces {}

// array holding multiple objects
const SFTopicsArr = [

    { topicName : "Java script fundamentals",topicCategory : "Javascript"}, // object 1
    { topicName : "JS Module",topicCategory : "Javascript"},
    { topicName : "Triggers",topicCategory : "APEX"},
];

console.log("showing numbers array ::" + numbers); // number array
console.log("showing veggie array ::" + veggie); // number array
console.log("showing carrot in the array ::" + veggie[2]); // number array

console.log("showing objects array ::" + SFTopicsArr); // objects array
console.log("showing objects array ::" + SFTopicsArr[0]); // objects array
console.log("showing objects array ::" + SFTopicsArr[0].topicName); // objects array 1st element 
console.log("showing objects array ::" + SFTopicsArr[1].topicName); // objects array 2nd element

// Method -1 
// For loop - loop thru object array and show all object values
for(let i=0 ; i < SFTopicsArr.length ; i++)
{

    console.log(`The topic ${SFTopicsArr[i].topicName} has been categorized 
    under ${SFTopicsArr[i].topicCategory} !!!`);

}

// Method 2
// For each

SFTopicsArr.forEach(printarrayitems); // array.foreach(function as argument)

function printarrayitems(item) // actual function 
{
    console.log(`The topic ${item.topicName} has been categorized 
    under ${item.topicCategory} !!!`);
}

veggie.forEach(printveggiearrayitems); // array.foreach(function as argument)

function printveggiearrayitems(item) // actual function 
{
    console.log(`Veggie array items : ${item} !!!`);
}



numbers.forEach(printNumberarrayitems); // array.foreach(function as argument)

function printNumberarrayitems(item) // actual function 
{
    console.log(`Number array items : ${item} !!!`);
}


// JS modules

// JArgons : Import / Export etc


function repeat_oldformat(input)
{
    console.log(`${input} ${input}`);
}

// Using JS modules u can make a call to functions defined outside the JSfile

const evennumberarr = [2,4,6,8,10];

evennumberarr.forEach(FindSquareRoot); // array.foreach(function as argument)
function FindSquareRoot(item) // actual function 
{
      console.log(`Square root of ${item} is  ${item * item}  !!!`);
}

// Approach 2 - using arrow function
/*evennumberarr.forEach((item) => 
    {
        console.log(`Square root of ${item} is  ${item * item}  !!!`);

    }
);
*/


// Array destructing

// combine 2 arrays

const evennumarr = [2,4,6,8,10];
const oddnumarr = [1,3,5,7,9];



// Method 1: Combining 2 array elements

console.log(evennumarr.concat(oddnumarr));
console.log("evennumarr::" + evennumarr);

// Method 2: Create a new array and merge arrays 
const numberarray = [].concat(oddnumarr, evennumarr);
console.log("numberarray::" + numberarray);

// Method 3: Es6 spread syntax
console.log("Es6 syntax:" + [...evennumarr, ...oddnumarr]);


// Points to remember
/*
1. All modern browsers support ES6 syntax except Internet explorer
2. If you know the data type u are deal with to merge then use cconcat else 
   go with ES6 
*/

const greetings = ["Hi", "I", "Am"]
const name = 'Javascript';

console.log("using concat::" + greetings.concat(name));

console.log("using ES6 spread syntax::" + [...greetings, ...name]);


// TODO: Hands-on - Apply ES6 syntax aganist objects





































