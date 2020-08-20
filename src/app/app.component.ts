import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {filter} from 'rxjs/operators';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public route: string;
  close: any = true;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
        // Show loading indicator
      }
    });
  }
  title = 'Allatrack';
  onActivate(event): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }
  closeCookie(): any {
    this.close = false;
  }
}
