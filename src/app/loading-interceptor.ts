import { HttpEvent, HttpEventType, HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export function loadingInterceptor(
   req: HttpRequest<unknown>,
   next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {
    console.log(req.url);
    return next(req).pipe(tap(event=>{
      if(event.type===HttpEventType.Response){
      console.log('Response received for ', req.url,"event status:",event.status);
      }
    }));
} 