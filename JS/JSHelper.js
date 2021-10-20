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



























