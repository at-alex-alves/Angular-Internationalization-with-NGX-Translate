import { Component, OnInit } from '@angular/core';

interface Language {
  value: string,
  viewValue: string,
  isCurrentLanguage: boolean
}

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  languages: Language[] = [
    {
      "value": "en",
      "viewValue": "English",
      "isCurrentLanguage": false
    },
    {
      "value": "pt",
      "viewValue": "Português",
      "isCurrentLanguage": false
    }
  ];

  constructor() {
    /* Sets the current language to the language that is already set in the local storage. */
    if (localStorage.getItem('language') == 'en') {
      this.languages.forEach(element => element.isCurrentLanguage = false);
      this.languages.find(element => element.value == 'en')!.isCurrentLanguage = true;
    } else {
      this.languages.forEach(element => element.isCurrentLanguage = false);
      this.languages.find(element => element.value == 'pt')!.isCurrentLanguage = true;
    }
  }

  ngOnInit(): void { }

  /* Changes the language to the language passed by when clicking the language button */
  changeLanguage(choosenLanguage: unknown): void {
    if (localStorage.getItem('language') != choosenLanguage) {
      localStorage.setItem('language', this.languages.find(element => element.value == choosenLanguage)?.value!);
      window.location.reload();
    }
  }

  /* Checks if the current language button is already set  */ 
  isCurrentLanguage(currentLanguage: unknown): boolean {
    return currentLanguage != this.languages.find(element => element.isCurrentLanguage == true)?.value!;
  }
}
