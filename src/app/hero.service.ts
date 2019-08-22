import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [
    new Hero('Hung', 'Hello Hung'),
    new Hero('Tung', 'Hello Tung'),
    new Hero('Nhung', 'Hello Nhung'),
    new Hero('Trung', 'Hello Trung'),
    new Hero('Phung', 'Hello Phung'),
  ];

  constructor(private http: HttpClient) {
  }

  list(): Hero[] {
    return this.heroes;
  }

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  listLive(): Observable<Hero[]> {
    return this.http.get<{ data: Hero[] }>(
      `https://wise-alpha-247604.appspot.com/api/v1/heroes`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      map(({data}) => data)
    );
  }

  saveLive(hero: Hero): Observable<Hero> {
    console.log('Hello');
    return this.http.post<{ data: Hero }>(
      `https://wise-alpha-247604.appspot.com/api/v1/heroes`,
      hero,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(map(({data}) => data));
  }
}
