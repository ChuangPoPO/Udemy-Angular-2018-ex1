import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  counter = 0;

  constructor() {
  }

  counterText(keypressText: string) {
    this.counter = keypressText.length;
  }
  escapeReset(keypressEsc, keypressText) {
    if (keypressEsc === 'Escape') {
      keypressText.value = '';
      this.counter = keypressText.value.length;
    }
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
}
