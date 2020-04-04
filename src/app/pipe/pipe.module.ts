import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SafePipe } from "./safe.pipe";

@NgModule({
  declarations: [],
  imports: [CommonModule, SafePipe],
  exports: [SafePipe]
})
export class PipeModule {}
