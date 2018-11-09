import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {SubstringPipePipe} from '../substring-pipe.pipe';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: any;
  constructor(private catService: CategoryService) { }
  ngOnInit() {
    this.catService.categoryList().subscribe(
      (data) => {
        this.categoryList = <Category> data['categoryList'] ;
        console.log(data['categoryList']);
      },
      (error) => {
        console.log('error') ;
      }
    );
  }

}
