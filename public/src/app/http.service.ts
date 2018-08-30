import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getAllWorms(){
    return this._http.get('/worms');
  }
  getAllDrugs(){
    return this._http.get('/drugs');
  }
  getShowWorm(id){
    return this._http.get('/show/worm/'+id);
  }
  getDisplayDrug(id){
    return this._http.get('/display/drug/'+id);
  }
  postNewWorm(newworm, id){
    return this._http.post('/new/worm/'+id, newworm);
  }
  postCreateDrug(newdrug){
    return this._http.post('/create/drug/', newdrug);
  }
  deleteWorm(id){
    return this._http.get('/delete/worm/'+id);
  }
  removeDrug(id){
    return this._http.get('/remove/drug/'+id);
  }
  editWorm(editworm){
    return this._http.post('/edit/worm/'+editworm._id, editworm);
  }
  updateDrug(updatedrug){
    return this._http.post('/update/drug/'+updatedrug._id, updatedrug);
  }
}
