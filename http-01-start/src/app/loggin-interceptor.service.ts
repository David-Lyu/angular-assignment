import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Outgoing request');
    console.log(req.url);


    return next.handle(req).pipe(tap(e=> {
      if(e.type === HttpEventType.Response) {
        console.log(e.body)
      }
    }));
  }
}
