import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private httpClient : HttpClient) { }

  /**
   * Add an application to selected list
   * @param id 
   */
  addSelection(id : number){
    let url = "http://localhost:3000/api/applications/" + id + "/select";
    return this.httpClient.post(url, {});
  }

  /**
   * Get all selected list applications
   */
  getAllSelection(){
    let url = "http://localhost:3000/api/selected";
    return this.httpClient.get(url);
  }

  /**
   * Remove an application from selected list
   * @param id 
   */
  deleteSelection(id : number){
    let url = "http://localhost:3000/api/applications/" + id + "/deselect";
    return this.httpClient.delete(url);
  }

  /**
   * Update score to selected list if changed in application
   * @param id 
   * @param data 
   */
  updateScore(id : number, data : any){
    let url = "http://localhost:3000/api/selected/score/" + id;
    return this.httpClient.put(url, data);
  }

  /**
   * Order selected list by ascending order
   * @param selectedList 
   */
  orderByAscending(selectedList : any){
    selectedList.sort(function(a : any, b : any){
        return ((parseInt(a.score) < parseInt(b.score)) ? -1 : ((parseInt(a.score) > parseInt(b.score)) ? 1 : 0));
    });
    return selectedList;
  }

  /**
   * Order selected list by descending order
   * @param selectedList 
   */
  orderByDescending(selectedList : any){
    selectedList.sort(function(a : any, b : any){
        return ((parseInt(a.score) > parseInt(b.score)) ? -1 : ((parseInt(a.score) < parseInt(b.score)) ? 1 : 0));
    });
    return selectedList;
  }
}
