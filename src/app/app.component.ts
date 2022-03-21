import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<toolbar></toolbar><home-page></home-page>'
})
export class AppComponent {

  constructor(public translateService: TranslateService) {
    /* Adds the languages to the list of languages that the app will support. */
    translateService.addLangs(['en', 'pt']);

    /* Sets the default language to English. */
    translateService.setDefaultLang('en');

    /* Sets the default language to English if the user has not selected a language. */
    translateService.use(localStorage.getItem('language') || 'en');
  }

  ngOnInit() {
    /* Sets the language of the page to the language that the user has selected. */
    document.documentElement.setAttribute('lang', localStorage.getItem('language') || 'en');
  }
}
