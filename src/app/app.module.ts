import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InterpolationComponent } from './components/basics/interpolation/interpolation.component';
import { PropertBindingComponent } from './components/basics/propert-binding/propert-binding.component';
import { ClassBindingComponent } from './components/basics/class-binding/class-binding.component';
import { EventBindingComponent } from './components/basics/event-binding/event-binding.component';
import { TemplateRefrenceComponent } from './components/basics/template-refrence/template-refrence.component';
import { TwoWayBindingsComponent } from './components/basics/two-way-bindings/two-way-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterpolationComponent,
    PropertBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TemplateRefrenceComponent,
    TwoWayBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
