import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, UrlSegment, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  navbarCollapsed: boolean = true;
  atRootUrl: boolean = false;
  atDocsUrl: boolean = false;
  urlSub: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.urlSub = this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.atRootUrl = event.url === '/' || event.url === '/home';
          this.atDocsUrl = event.url.indexOf('/docs') === 0;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.urlSub.unsubscribe();
  }
}
