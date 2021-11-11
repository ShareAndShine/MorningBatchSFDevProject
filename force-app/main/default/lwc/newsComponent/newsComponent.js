

import { LightningElement } from 'lwc';
import retriveNews from "@salesforce/apex/newsController.retriveNews";

export default class NewsComponent extends LightningElement {
    
    result = []
    selectedNews={};
    isModalOpen = false;
    
    /***modalBackdropClass method set the classes based on the isModalOpen Value ***/
    get modalClass(){
        return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" :""}`
    }

    /***modalBackdropClass method set the class based on the isModalOpen Value ***/
    get modalBackdropClass(){
        return this.isModalOpen ? "slds-backdrop slds-backdrop_open" : "slds-backdrop"
    }
    connectedCallback(){
        this.fetchNews();
    }
/****fetchNews method gets called on page load, and within this, we are calling the retriveNews apex method using apex imperative approach****/
    fetchNews(){
        retriveNews().then(response=>{
            console.log(response);
            this.formatNewsData(response.articles)
        }).catch(error=>{
            console.error(error);
        })
    }
/****formatNewsData method structuring the response we are getting from the apex method by adding the id, name and date  ****/
    formatNewsData(res){
        this.result = res.map((item, index)=>{
            let id = `new_${index+1}`;
            let date = new Date(item.publishedAt).toDateString()
            let name = item.source.name;
            return { ...item, id: id, name: name, date: date}
        })

    }
    /****showModal method fetch the id of the news card that has been clicked and filter particular news based on the id ****/
    showModal(event){
        let id = event.target.dataset.item;
        this.result.forEach(item=>{
            if(item.id === id){
                this.selectedNews ={...item}
            }
        })
        this.isModalOpen = true;
    }
    /****closeModal method close the modal ****/
    closeModal(){
        this.isModalOpen = false;
    }
}
