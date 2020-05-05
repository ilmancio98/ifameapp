import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';//Import HttpClient service
import { Observable, of, throwError, from } from 'rxjs'; //Import rxjs
import { catchError, tap, map } from 'rxjs/operators';
import { Locals} from '../models/locals';

@Injectable({
  providedIn: 'root'
})

//Service class
export class IonicRestService {
  

  //API url 
  apiURL = 'http://www.ifameapp.altervista.org/api';

  locals: Locals[];

 
  //Define the httpHeader
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }//Inject HttpClient in the constructor.




  /**
   * Returns the list of locals wrapped in the Observable <===
   */
  getAll(): Observable<Locals[]> {
    return this.http.get(`${this.apiURL}/lista_locali`).pipe(//Fetch the data from the server with get method and extract the list with pipe
      map((res) => {//Map the array of locals that come from the server to the locals variable
        this.locals = res['data'];
        return this.locals;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Handle http error
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

}
