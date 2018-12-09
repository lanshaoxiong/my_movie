import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs';
import { mergeMap, map, toArray } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { RecommendationDetailPage } from '../recommendation-detail/recommendation-detail';
/**
 * Generated class for the RecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommendation',
  templateUrl: 'recommendation.html',
})
export class RecommendationPage {

  recommendations: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public apiProvider: ApiProvider) {}

  ionViewWillEnter() {
    this.recommendations = this.apiProvider.getRecommendations()
      .pipe(map(response => response.recommendations),
        mergeMap(recArray => from(recArray)),
        map(rec => (rec as any).tmdbId),
        mergeMap(tmdbId => this.apiProvider.getMovieInfo(tmdbId)),
        toArray()
      );

    this.recommendations.subscribe(data => {
      console.log('my recommendation: ', data);
    });
  }

  openRecDetailsPage(rec) {
    this.navCtrl.push(RecommendationDetailPage, { rec: rec });
  }
}