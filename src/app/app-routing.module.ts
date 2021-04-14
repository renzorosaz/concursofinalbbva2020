import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/app-home.component';

const routes: Routes =[
   
    { path:'home' , component:HomeComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}

export const RoutingComponents = [
    HomeComponent
]