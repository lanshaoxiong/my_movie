import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs';
import { RecommendationDetailPage } from '../recommendation-detail/recommendation-detail';

/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html',
})
export class RankPage {
  popularList: Observable<any>;
  newestList:  Observable<any>;
  highestList: Observable<any>;
  isAndroid: boolean = false;
  rank: string = "pupular";

  constructor(public navCtrl: NavController,
    public apiProvider: ApiProvider,
    platform: Platform) {
      this.isAndroid = platform.is('android');
    }

  ionViewWillEnter() {
    this.popularList = this.apiProvider.getPopularMovies();
    this.newestList = this.apiProvider.getNewestMovies();
    this.highestList = this.apiProvider.getHighestRateMovies();
  }

  openMovDetailsPage(mov) {
    this.navCtrl.push(RecommendationDetailPage, {rec:mov})
  }
}
