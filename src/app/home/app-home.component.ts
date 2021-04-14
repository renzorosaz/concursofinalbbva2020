
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})
export class HomeComponent {
    loginForm!: FormGroup;
    socialUser!: SocialUser;
    isLoggedin: boolean = false;
    http: any;
    
    constructor(
      private formBuilder: FormBuilder, 
      private socialAuthService: SocialAuthService,
     
    ) { 
      console.log(this.isLoggedin)
      
    }
  
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });    
      
      this.socialAuthService.authState.subscribe((user) => {
        this.socialUser = user;
        this.isLoggedin = (user != null);
      });
  
      
    }
  
    loginWithFacebook(): void {
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(
        data => {
          //console.log(data["email"]);
          //this.registerSocialNetUser(data.response)
          //this.registerSocialNetUser(data['firstName'], data['lastName'], data['email'], '1234', 'facebook', data['photoUrl']);
          //this.router.navigate(['items'], { relativeTo: this.route });
        },
        error => {
          console.log('error ', error)
        }
      
  
      );
    }
    // registerSocialNetUser(): Observable<any>{
    //    let headers = new HttpHeaders();
    //   headers = headers.append('Content-Type', 'application/json');
    //   const params = new HttpParams();
    //   const body = JSON.stringify(person);
    //   const options = { headers: headers, params: params };
    //   return this.http.post("http://localhost:8000" + '/new-register-api/', body, options);
    // }
  
    signOut(): void {
      this.socialAuthService.signOut();
    }
}