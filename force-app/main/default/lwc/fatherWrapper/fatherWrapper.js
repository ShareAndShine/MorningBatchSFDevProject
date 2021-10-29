import { LightningElement } from 'lwc';

export default class FatherWrapper extends LightningElement {

    SendMessageToJohn = "Hi John !! Father here ..hope you are doing great";

    SendMessageToLara = "Hi Lara !!!.. Hopign to meet you for this Diwali !!!";

    SendMessageToBen = "Hi Ben !!!... Lets catch on in the camping ground this month !!! ";  


    title = "Parent Component !!!"; 

    johnmessage = "Waiting to see message from John !!!";

    laramessage = "Waiting to see message from Lara !!!"

    handleMessageReceivedFromChild(event)
    {
        this.johnmessage = event.detail.johnmsg;
        this.laramessage = event.detail.laramsg;
    }

}