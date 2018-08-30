import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worm',
  templateUrl: './worm.component.html',
  styleUrls: ['./worm.component.css']
})
export class WormComponent implements OnInit {
  @Input()
  drugs:any;
  constructor(private _httpService: HttpService, private _router: Router, private_route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllWorms()
  }
  getAllWorms(){
    let observable = this._httpService.getAllDrugs();
    observable.subscribe(data=>{
      this.drugs = data;
      console.log(this.drugs);
    })
  }
}
