import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.css']
})
export class IntelligenceComponent implements OnInit {
  @Input()
  drugs:any;
  drugId:any;
  newDrug:any;
  newWorm:any;
  selectedDFile: File;
  selectedWFile: File;
  constructor(private _httpService: HttpService, private _router: Router){
  }
  ngOnInit() {
    this.newDrug = { drugname: "", concentration: "" }
    this.newWorm = { wormname: "", velocity: "", behavior: "" }
    this.getAllDrugs();
    this.drugId = "";
  }
  onDrugFileSelected(event){
    this.selectedDFile = <File>event.target.files[0];
    console.log(this.selectedDFile)
  }
  onWormFileSelected(event){
    this.selectedWFile = <File>event.target.files[0];
    console.log(this.selectedWFile)
  }
  onNewDrugSubmit(){
    const formData: any = new FormData();
    formData.set('image', this.selectedDFile, this.selectedDFile.name)
    formData.set('drugname', this.newDrug.drugname)
    formData.set('concentration', this.newDrug.concentration)
    let observable = this._httpService.postCreateDrug(formData);
    observable.subscribe(data=>{
      console.log(data);
      alert("Success!");
    })
  }
  getAllDrugs(){
    let observable = this._httpService.getAllDrugs();
    observable.subscribe(data=>{
      this.drugs = data;
    })
  }
  onNewWormSubmit(){
    const formData: any = new FormData();
    formData.set('media', this.selectedWFile, this.selectedWFile)
    formData.set('wormname', this.newWorm.wormname)
    formData.set('velocity', this.newWorm.velocity)
    formData.set('behavior', this.newWorm.behavior)
    let observable = this._httpService.postNewWorm(formData, this.drugId);
    observable.subscribe(data=>{
      console.log(data);
      alert("Success!");
    })
  }
}
