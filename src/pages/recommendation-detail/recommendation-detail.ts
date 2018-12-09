import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-recommendation-detail',
  templateUrl: 'recommendation-detail.html',
})
export class RecommendationDetailPage {
  rec:any;
  ratings: number = 3;
  response: Observable<any>

  constructor(public navParams: NavParams,
    public events: Events,
    public apiProvider: ApiProvider) {
    this.rec = navParams.data.rec;

    this.events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
      this.ratings = starRating;
    })
  }

  makeARate() {
    console.log("rating button is clicked");
    this.response = this.apiProvider.makeMovieRate('0', this.rec.id, this.ratings);
    this.response.subscribe(result => {
      console.log("response: ", result);
    });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendationDetailPage');
  }
}
