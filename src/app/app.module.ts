import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { SectionComponent } from './section/section.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HeadComponent,
    SectionComponent,
    StarComponent,
    ProductComponent,
    FormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    NgbCollapseModule,
    AppRoutingModule,
    HttpClientModule,
  
 
   BrowserAnimationsModule,
 
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
