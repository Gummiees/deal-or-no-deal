import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoxComponent } from './main/box/box.component';
import { MainComponent } from './main/main.component';
import { MoneyCardComponent } from './main/money-card/money-card.component';

@NgModule({
  declarations: [AppComponent, MainComponent, BoxComponent, MoneyCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, MainComponent, BoxComponent, MoneyCardComponent],
})
export class AppModule {}
