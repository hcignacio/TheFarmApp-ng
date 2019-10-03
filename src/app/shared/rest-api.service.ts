import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Farms } from './farms.model';
import { Chickens } from './chickens.model';
import { Eggs } from './eggs.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl= 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getFarms(): Observable<Farms> {
    return this.http.get<Farms>(this.apiUrl + '/farms');
  }

  getChickens(): Observable<Chickens> {
    return this.http.get<Chickens>(this.apiUrl + '/chickens');
  }

  getChickenById(farmId, chickenId): Observable<Chickens> {
    return this.http.get<Chickens>(this.apiUrl + '/' + farmId + '/edit_chicken/' + chickenId);
  }

  getEggs(): Observable<Eggs> {
    return this.http.get<Eggs>(this.apiUrl + '/eggs');
  }

  createFarm(farm): Observable<Farms> {
    return this.http.post<Farms>(this.apiUrl + '/add_farm',
                                    JSON.stringify(farm),
                                    this.httpOptions);
                                    //.pipe(catchError(this.handleError<Chickens>('createChicken')));
  }

  createChicken(chicken): Observable<Chickens> {
    return this.http.post<Chickens>(this.apiUrl + '/add_chicken',
                                    JSON.stringify(chicken),
                                    this.httpOptions);
                                    //.pipe(catchError(this.handleError<Chickens>('createChicken')));
  }

  createEgg(egg): Observable<Eggs> {
    return this.http.post<Eggs>(this.apiUrl + '/add_egg',
                                JSON.stringify(egg),
                                this.httpOptions);
                                //.pipe(catchError(this.handleError<Eggs>('createEgg')));
  }

  createChickenById(id): Observable<Chickens> {
    return this.http.post<Chickens>(this.apiUrl + '/add_chicken_by_id',
                                JSON.stringify(id),
                                this.httpOptions);
  }

  createEggById(id): Observable<Eggs> {
    return this.http.post<Eggs>(this.apiUrl + '/add_egg_by_id',
                                JSON.stringify(id),
                                this.httpOptions);
  }

  born(egg): Observable<Eggs> {
    return this.http.post<Eggs>(this.apiUrl + '/born',
                                JSON.stringify(egg),
                                this.httpOptions);
  }

  editChicken(farmId, chickenId, chicken): Observable<Chickens> {
    return this.http.post<Chickens>(this.apiUrl + '/' + farmId + '/edit_chicken/' + chickenId,
                                    JSON.stringify(chicken),
                                    this.httpOptions);
  }
  
  editFarm(farmId, farm): Observable<Chickens> {
    return this.http.post<Chickens>(this.apiUrl + '/edit_farm/' + farmId,
                                    JSON.stringify(farm),
                                    this.httpOptions);
  }

  /*
  createEggById(egg): Observable<Eggs> {
    return this.http.post<Eggs>(this.apiUrl + '/add_egg_by_id',
                                JSON.stringify(egg),
                                this.httpOptions);
  }
  */

  /*
  deleteChicken(id) {
    return this.http.delete<Chickens>(this.apiUrl + '/chickens/' + id);
  }
  */

  deleteFarm(farm): Observable<Farms> {
  return this.http.post<Farms>(this.apiUrl + '/del_farm',
                                  JSON.stringify(farm),
                                  this.httpOptions);
  }

  deleteChicken(chicken): Observable<Chickens> {
    return this.http.post<Chickens>(this.apiUrl + '/del_chicken',
                                    JSON.stringify(chicken),
                                    this.httpOptions);
  }

  deleteEgg(egg): Observable<Eggs> {
    return this.http.post<Eggs>(this.apiUrl + '/del_egg',
                                    JSON.stringify(egg),
                                    this.httpOptions);
  }

  /*
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  */
}
