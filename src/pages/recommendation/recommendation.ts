import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs';
import { mergeMap, map, toArray, catchError } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { RecommendationDetailPage } from '../recommendation-detail/recommendation-detail';
/**
 * Generated class for the RecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
        // catchError(error => Observable.empty()),
        catchError(error => Observable.of(error)),
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
