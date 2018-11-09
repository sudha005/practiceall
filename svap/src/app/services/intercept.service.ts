import { Injectable } from '@angular/core';
import {CategoryService} from '../category.service';
import {
  HttpEvent ,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
@Injectable()
export class InterceptService  implements HttpInterceptor {
constructor(private authService: CategoryService) { }
// intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// modify request
    request = request.clone({
      setHeaders: {
        'admin': 'svap21398ec205dc3b5980696ad81baab1f0'
      }
    });
  // console.log('----requesht----');
  // console.log(request);
  // console.log('--- end of request---');
    return next.handle(request);
    // .pipe(
    //     tap(event => {
    //       if (event instanceof HttpResponse) {
    //         // console.log(' all looks good');
    //         // // http response status code
    //         // console.log(event.status);
    //       }
    //     }, error => {
    //     // http response status code
    //     // console.log('----response----');
    //     // console.error('status code:');
    //     // console.error(error.status);
    //     // console.error(error.message);
    //     // console.log('--- end of response---');

    //     })
    //   );

  }
}
