import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cinema-film-item",
  templateUrl: "./cinema-film-item.component.html",
  styleUrls: ["./cinema-film-item.component.scss"]
})
export class CinemaFilmItemComponent implements OnInit {
  @Input("itemPhim") itemPhim: any[] = [];
  @Input("lstLichChieuTheoPhim") lstLichChieuTheoPhim: any[] = [];

  ngOnInit() {
    for (let item in this.itemPhim) {
      console.log(item);
    }
  }
}
