import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tao-lich-chieu',
  templateUrl: './tao-lich-chieu.component.html',
  styleUrls: ['./tao-lich-chieu.component.scss']
})
export class TaoLichChieuComponent implements OnInit {
  @Input("thongTinPhim") thongTinPhim : any ; 
  constructor() { }

  ngOnInit() {
    console.log(this.thongTinPhim);
    
  }

}