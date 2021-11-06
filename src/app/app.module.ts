import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { BitcoinChartComponent } from './cmps/bitcoin-chart/bitcoin-chart.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { RemoveModalComponent } from './cmps/remove-modal/remove-modal.component';
import { HamburgerComponent } from './cmps/hamburger/hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    AppFooterComponent,
    UserPreviewComponent,
    MoveListComponent,
    MovePreviewComponent,
    TransferFundsComponent,
    BitcoinChartComponent,
    UserMsgComponent,
    RemoveModalComponent,
    HamburgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
