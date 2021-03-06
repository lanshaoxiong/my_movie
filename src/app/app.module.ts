import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { StarRatingModule } from 'ionic3-star-rating';
import { RecommendationPage } from '../pages/recommendation/recommendation';
import { HttpClientModule } from '@angular/common/http';
import { RecommendationDetailPage } from '../pages/recommendation-detail/recommendation-detail';
import { RankPage } from '../pages/rank/rank';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    RankPage,
    RecommendationPage,
    RecommendationDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    RankPage,
    RecommendationPage,
    RecommendationDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
  ]
})
export class AppModule { }
