import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {Category} from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost/svaprest/index.php/api/Myservice/getCategory';
  constructor(private httpClient: HttpClient) {

   }

  categoryList() {
    return this.httpClient.get(this.url);
  }
}
