import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService} from '../services/intercept.service';
import {CategoryService} from '../category.service';
import {SubstringPipePipe} from '../substring-pipe.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent,
    SubstringPipePipe],
  providers: [
    CategoryService,
    InterceptService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptService,
        multi: true
      }
  ],
  exports : [
    CategoryComponent,
  ]
})
export class CategoryModule { }
