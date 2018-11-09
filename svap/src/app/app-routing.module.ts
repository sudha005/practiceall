import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BodycontentComponent} from './bodycontent/bodycontent.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import {CategoryModule} from './category/category.module';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
const routing = [
  {path: '', component: BodycontentComponent},
  {path: '', component: LeftbarComponent, outlet: 'left'},
  {path: '', component: RightbarComponent, outlet: 'right'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routing),
    HttpClientModule,
    CategoryModule
  ],
  declarations: [
    BodycontentComponent,
    LeftbarComponent,
    RightbarComponent,
  ]
})
export class AppRoutingModule { }
