import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module-md-dev';
  isTwilioView = false;

  constructor(
    private route: ActivatedRoute,
  ) {}

  async ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      console.log(" params ", params);
    });
  }

  onVisitTwilioVideo() {
    this.isTwilioView = !this.isTwilioView;
  }
}
