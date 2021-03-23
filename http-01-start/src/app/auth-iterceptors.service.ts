import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request is on it\'s way')
    //can modified a request, but it is immutable so need a clone
    const modifiedRequest = req.clone({headers: req.headers.append("Auth","xyz")})
    //response give handle a obs, can use map too
    return next.handle(req).pipe(tap(e=> {
      console.log(e)
      if(e.type === HttpEventType.Response) {
        console.log("response arrived body data");
        console.log(e.body);
      }
    }));
  }
}
