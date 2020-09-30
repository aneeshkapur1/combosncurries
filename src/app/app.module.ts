import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { Restaurant3Component } from './components/templates/restaurant3/restaurant3.component';
import { CountdownComponent } from './components/common/countdown/countdown.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { FoodCollectionComponent } from './components/pages/food-collection/food-collection.component';
import { OnlineOrderComponent } from './components/pages/online-order/online-order.component';
import { ChefsComponent } from './components/pages/chefs/chefs.component';
import { BookTableComponent } from './components/pages/book-table/book-table.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';

@NgModule({
  declarations: [
    AppComponent,
    Restaurant3Component,
    PreloaderComponent,
    CountdownComponent,
    NavbarStyleOneComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    FooterStyleOneComponent,
    FooterStyleTwoComponent,
    NavbarStyleTwoComponent,
    AboutComponent,
    CategoriesComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    BlogDetailsComponent,
    BlogComponent,
    FoodCollectionComponent,
    OnlineOrderComponent,
    ChefsComponent,
    BookTableComponent,
    CartComponent,
    CheckoutComponent,
    ComingSoonComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ErrorComponent,
    ContactComponent,
    NavbarStyleThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
