import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  @Input()
  drugs:any;
  delete:any;
  constructor(private _httpService: HttpService, private _router: Router, private_route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getAllDrugs()
  }
  getAllDrugs(){
    let observable = this._httpService.getAllDrugs();
    observable.subscribe(data=>{
      this.drugs = data;
    })
  }
  deleteClick(id): void{
    let observable = this._httpService.removeDrug(id);
    observable.subscribe(data =>{
      this.delete = data;
      console.log(data);
      this.getAllDrugs();
    })
  }
}
