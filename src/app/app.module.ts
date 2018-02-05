import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import {Api} from './services/api';
import { AppComponent } from './app.component';
import { Header } from './header/header';
import { FaqCategory } from './faq-category/faq-category';
import {FaqCategoryData} from './faq-category/faq-category-data/faq-category-data';
import{Modal} from './model/model';
import {WebsiteName} from './faq-category/websiteName/website-name';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    FaqCategory,
    FaqCategoryData,
    Modal,
    WebsiteName
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
