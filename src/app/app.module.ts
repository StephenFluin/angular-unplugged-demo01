import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { ProfileViewComponent } from './profile-view.component';
import { SystemStatisticsComponent } from './system-statistics/system-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterBarComponent,
    ProfileViewComponent,
    SystemStatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( [
      {path: '', component: ProfileViewComponent},
      {path: 'stats', component: SystemStatisticsComponent},
      {path: 'stats/:messageId', component: SystemStatisticsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
