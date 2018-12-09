import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { RecommendationPage } from '../recommendation/recommendation';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecommendationPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
