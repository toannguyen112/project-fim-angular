import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TrangChuModule } from "./trang-chu/trang-chu.module";
import { DetailPageModule } from './detail-page/detail-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TrangChuModule ,DetailPageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
