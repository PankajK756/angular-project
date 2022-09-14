import { CoachprofileComponent } from './coachprofile/coachprofile.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { CoachComponent } from './coach.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const coachRoutes: Routes = [
    {
        path:'',component:CoachComponent,
        children:[
            {path:'coachHome',component:CoachhomeComponent},
            {path:'coachProfile',component:CoachprofileComponent}]

    },

];
@NgModule({
    imports: [RouterModule.forChild(coachRoutes)],
    exports: [RouterModule]
})
export class CoachRoutingModule { }
