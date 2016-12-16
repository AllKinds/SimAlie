import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';                 // Angular2 Material Design Lite

import { DebtService } from './debt.service';

import { AppComponent } from './app.component';
import { DebtTableComponent } from './debt-table/debt-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DebtTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MdlModule 
  ],
  providers: [DebtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
