import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay, catchError, map } from 'rxjs';
import { Database } from '../models/entidades';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly baseUrl = 'https://69c5b8178a5b6e2dec2cc3e8.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  getAll<T>(entity: keyof Database): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${entity}`).pipe(
      catchError(err => {
        console.error('Error cargando datos', err);
        return of([] as T[]);
      }),
      delay(800)
    );
  }

  getById<T>(entity: keyof Database, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${entity}/${id}`).pipe(
      catchError(err => {
        console.error('Error buscando item:', err);
        return of(undefined as T);
      }),
      delay(300)
    );
  }

  create<T>(entity: keyof Database, item: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${entity}`, item).pipe(
      catchError(err => {
        console.error('Error creando item:', err);
        return of(item);
      }),
      delay(500)
    );
  }

  update<T>(entity: keyof Database, id: number | string, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${entity}/${id}`, item).pipe(
      catchError(err => {
        console.error('Error actualizando item:', err);
        return of(item);
      }),
      delay(500)
    );
  }

  delete(entity: keyof Database, id: number | string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/${entity}/${id}`).pipe(
      catchError(err => {
        console.error('Error eliminando item:', err);
        return of(null);
      }),
      map(() => true),
      delay(500)
    );
  }
}