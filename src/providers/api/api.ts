import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) { }

  getRecommendations(): Observable<any> {
    return this.http.get("https://mymovie-3a3a8.appspot.com/api/get_recommendations");
  }

  getMovieInfo(tmdbId: string): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/" + tmdbId + "?api_key=e469972cad8b86556b25f9be119f76b9");
  }

  makeMovieRate(userId: string, tmdbId: string, ratings: number): Observable<any> {
    return this.http.post('https://mymovie-3a3a8.appspot.com/api/make_rate?userId=' + userId + '&tmdbId=' + tmdbId + '&ratings=' + ratings,
      {
        headers: { 'Content-Type': 'application/json' }
      })
  }

  getPopularMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=e469972cad8b86556b25f9be119f76b9&sort_by=popularity.desc&page=1");
  }

  getHighestRateMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=e469972cad8b86556b25f9be119f76b9&sort_by=vote_average.desc&page=1&vote_count.gte=100");
  }

  getNewestMovies():Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=e469972cad8b86556b25f9be119f76b9&sort_by=primary_release_date.asc&page=1&primary_release_date.gte=now");
  }

  getSearchedMovies(query: string): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=e469972cad8b86556b25f9be119f76b9&query=" + query + "&page=1");
  }
}
