import { Component } from '@angular/core';
import {filter} from 'rxjs/operators';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public route: string;
  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
        // Show loading indicator
      }
    });
  }
  title = 'Allatrack';
  onActivate(event): void {
    window.scroll(0, 0 );
  }
}
