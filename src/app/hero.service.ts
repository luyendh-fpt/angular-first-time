import {Injectable} from '@angular/core';
import {Hero} from './hero';

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

  constructor() {
  }

  list(): Hero[] {
    return this.heroes;
  }

  create(hero: Hero) {
    this.heroes.push(hero);
  }
}
