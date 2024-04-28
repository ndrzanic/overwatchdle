import { map, Observable, startWith } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { HeroName } from '../../constants/hero-names';
import { Hero } from '../../interfaces/hero';
import { HttpService } from '../http.service';
import { LocalStorageService } from '../local-storage.service';
import { TraitCorrectnessPipe } from '../trait-correctness.pipe';

@Component({
  selector: 'app-classic-mode',
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    TraitCorrectnessPipe,
  ],
  templateUrl: './classic-mode.component.html',
  styleUrl: './classic-mode.component.css',
})
export class ClassicModeComponent implements OnInit {
  correctHero!: Hero;
  heroes!: Record<HeroName, Hero>;
  heroList!: Hero[];

  isLoading = true;

  showVictoryScreen = false;

  formControl: FormControl;
  filteredHeroes!: Observable<any[]>;

  submittedAnswers: Hero[] = [];

  dataSource!: MatTableDataSource<Hero>;
  displayedColumns: string[] = [
    'image',
    'gender',
    'role',
    'occupation',
    'weaponType',
  ];

  @ViewChild('heroInput') heroInput!: ElementRef;

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) {
    this.formControl = new FormControl();

    this.filteredHeroes = this.formControl.valueChanges.pipe(
      startWith(null),
      map((name) => {
        if (!name) {
          return this.heroList.filter(
            (hero) => !this.submittedAnswers.includes(hero)
          );
        }

        return this.heroList
          .filter((hero) => {
            return (
              hero.name.toLowerCase().includes(name) &&
              !this.submittedAnswers.includes(hero)
            );
          })
          .sort(
            (a, b) => b.name.localeCompare(name) - a.name.localeCompare(name)
          );
      })
    );
  }

  ngOnInit(): void {
    this.httpService.getTriviaHero().subscribe((response) => {
      this.heroList = Object.values(response.heroList);
      this.heroes = response.heroList;

      this.correctHero = this.heroList.find(
        (hero) => hero.name === window.atob(response.correctHero)
      )!;

      this.isLoading = false;

      const localStorageAnswers = this.localStorageService.getTriviaAnswers();
      this.submittedAnswers = this.heroList.filter((hero) =>
        localStorageAnswers.includes(hero.name)
      );

      this.verifyGameOver();

      this.dataSource = new MatTableDataSource(this.submittedAnswers);
    });
  }

  submit(event: MatAutocompleteSelectedEvent) {
    const hero = this.heroList.find((hero) => hero.name === event.option.value);
    if (!hero) {
      return;
    }

    this.heroInput.nativeElement.value = '';

    this.localStorageService.pushTriviaAnswer(hero);
    this.submittedAnswers.push(hero);

    this.verifyGameOver();

    this.dataSource = new MatTableDataSource(this.submittedAnswers);
  }

  verifyGameOver() {
    if (this.submittedAnswers.includes(this.correctHero)) {
      this.showVictoryScreen = true;
    }
  }
}
