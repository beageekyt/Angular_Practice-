import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyInlineStyleComponentComponent } from './my-inline-style-component/my-inline-style-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MyInlineStyleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
