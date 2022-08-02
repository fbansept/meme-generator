import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    //-------- REQUETE SORTANTE -------

    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt")

      request = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + jwt)
      });
    }


    return next.handle(request).pipe(map((event: HttpEvent<any>) => {


      //-------- REQUETE ENTRANTE -------

      if (event instanceof HttpResponse && event.headers.get("Authorization")?.startsWith("Bearer ")) {

        const jwt: string | undefined = event.headers.get("Authorization")?.substring(7)

        if (jwt) {
          localStorage.setItem("jwt", jwt)
        }

      }

      return event
    }))
  }
}
