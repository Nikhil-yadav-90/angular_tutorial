import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InterpolationComponent } from './components/basics/interpolation/interpolation.component';
import { PropertBindingComponent } from './components/basics/propert-binding/propert-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterpolationComponent,
    PropertBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
