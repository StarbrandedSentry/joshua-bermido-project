import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { MenusComponent } from './menus/menus.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { CateringComponent } from './catering/catering.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'order-online', component: OrderOnlineComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
