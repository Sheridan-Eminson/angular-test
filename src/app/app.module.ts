import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SurveyFormsComponent } from './survey-forms/survey-forms.component';
import { FooterComponent } from './footer/footer.component';
import { BarHeaderComponent } from './bar-header/bar-header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, SurveyFormsComponent, FooterComponent, BarHeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
