import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs';
import { RecommendationDetailPage } from '../recommendation-detail/recommendation-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchItems: Observable<any>;

  constructor(public navCtrl: NavController,
    public apiProvider: ApiProvider) { 
    this.searchItems = this.apiProvider.getSearchedMovies("marvel");
  }

  openMovDetailsPage(mov) {
    this.navCtrl.push(RecommendationDetailPage, {rec:mov})
  }

  getMovs(ev):any {
    var query = ev.target.value;
    if (query && query.trim() != '') {
      this.searchItems = this.apiProvider.getSearchedMovies(query);
    }
  }
}
