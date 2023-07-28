import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
})
export class MainModule { }
