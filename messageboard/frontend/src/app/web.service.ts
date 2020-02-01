import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63145/api'

    private messageStore;

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: HttpClient, private sb : MatSnackBar){
      this.getMessages('');
    }

    getMessages(user){
          user = (user) ? '/' + user : '';
          this.http.get(this.BASE_URL + '/messages' + user).subscribe(response =>{
            this.messageStore = response;
            this.messageSubject.next(this.messageStore);
          }, error => {
            this.handleError("Unable to get messages.");
          });
      }

    postMessage(message){
        this.http.post(this.BASE_URL + '/message', message).subscribe(response => {
          this.messageStore.push(response);
          this.messageSubject.next(this.messageStore);
        }, error => {
          this.handleError("Unable to post message.")
        });
        
    }

    private handleError(error){
      console.error(error);
      this.sb.open(error, 'close', {duration: 5000})
    }
}

