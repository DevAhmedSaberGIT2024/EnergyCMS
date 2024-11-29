import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false, // إذا كنت تريد استخدام NgModule
  styleUrls: ['./app.component.css'] // تأكد من كتابة `styleUrls` بالشكل الصحيح
})
export class AppComponent {
  title = 'EnergyCMS';
  showSplash: boolean = true;

  constructor() {
    setTimeout(() => {
      this.showSplash = false; // يتم إخفاء شاشة التحميل
    }, 3000);
  }
}
