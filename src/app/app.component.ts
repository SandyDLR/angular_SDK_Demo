import { Component } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translationService: TranslationService) {
      translationService.init({
      token: '1/c8da7f08d3e4e207b738e5d8aef4ba1694d20773',
  });
}}