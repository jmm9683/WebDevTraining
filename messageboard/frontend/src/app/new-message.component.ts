import { Component } from '@angular/core';
import { WebService } from './web.service';


@Component({
    selector: 'new-message',
    templateUrl: './new-message.component.html'

})
export class NewMessageComponent {


    constructor(private webService : WebService){}

    message ={
        owner: "",
        text: ""
    }

    post(){
        this.webService.postMessage(this.message);
    }

}