import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule, MatFormFieldModule, MatSnackBarModule  } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

var routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'messages/:name',
  component: MessagesComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
