import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { RecommendationPage } from '../recommendation/recommendation';
import { RankPage } from '../rank/rank';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecommendationPage;
  tab3Root = RankPage;

  constructor() {

  }
}
