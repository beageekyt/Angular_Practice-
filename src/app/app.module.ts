import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyInlineStyleComponentComponent } from './my-inline-style-component/my-inline-style-component.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { USDtoINRPipe } from './pipes/usdto-inr.pipe';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MyInlineStyleComponentComponent,
    ChildComponent,
    Child2Component,
    USDtoINRPipe,
    MySecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
