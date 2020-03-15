import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H", status: "" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He", status: "" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li", status: "" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be", status: "" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B", status: "" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C", status: "" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N", status: "" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O", status: "" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F", status: "" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne", status: "" }
];
@Component({
  selector: "app-quanlinguoidung-content",
  templateUrl: "./quanlinguoidung-content.component.html",
  styleUrls: ["./quanlinguoidung-content.component.scss"]
})
export class QuanlinguoidungContentComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
