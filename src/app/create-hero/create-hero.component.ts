import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  hero: Hero;
  form: FormGroup;
  formControls = {
    name: [null],
    description: [null]
  };

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  doSubmit() {
    this.hero = new Hero(this.form.get('name').value, this.form.get('description').value);
    console.log('Hello1');
    let observable: Observable<Hero>;
    observable = this.heroService.saveLive(this.hero);
    observable
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }
}
