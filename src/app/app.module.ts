import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { MenusComponent } from './menus/menus.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { CateringComponent } from './catering/catering.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    MenusComponent,
    OrderOnlineComponent,
    CateringComponent,
    EventsComponent,
    ContactComponent,
    LandingPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
