import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';

import {AppRoutingModule, RoutingComponents} from './app-routing.module';


@NgModule({
  
  declarations: [
    RegisterUserComponent,
    RoutingComponents,
    AppComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '188219412973255'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }