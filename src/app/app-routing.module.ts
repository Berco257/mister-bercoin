import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolver } from './resolvers/contact.resolver';

const routes: Routes = [
  {
    path: 'contact/edit/:contactId',
    component: ContactEditPageComponent,
    resolve: { contact: ContactResolver },
  },
  {
    path: 'contact/edit',
    component: ContactEditPageComponent,
    resolve: { contact: ContactResolver },
  },
  {
    path: 'contact/:contactId',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolver },
  },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
