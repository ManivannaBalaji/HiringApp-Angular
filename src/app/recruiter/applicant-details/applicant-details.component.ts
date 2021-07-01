import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../service/application.service';
import { SelectionService } from '../../service/selection.service';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {

  applicationId : number;
  application : any;
  displayApplication : any;

  constructor(private route : ActivatedRoute, private applicationService : ApplicationService, private selectionService : SelectionService) {
    this.applicationId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getApplication(this.applicationId);
  }

  getApplication(id : number){
    this.applicationService.getApplication(id).subscribe(res => {
      this.application = res;
      this.displayApplication = Object.assign({}, this.displayApplication, this.application);
    }, err => {
      console.log(err);
    });
  }

  updateApplication(){
    let currentStatus = this.displayApplication.status;
    let storedStatus = this.application.status;
    let updatedData = {
      score: this.displayApplication.score,
      status: currentStatus,
      comments: this.displayApplication.comments 
    }
    if(currentStatus != storedStatus){
      if(currentStatus === "selected"){
        this.performUpdate(this.applicationId, updatedData);
        this.addToSelectionList(this.applicationId);
      } else if((currentStatus === "notselected" || currentStatus === "pending" || currentStatus === "hold") 
                  && storedStatus === "selected"){
          this.performUpdate(this.applicationId, updatedData);
          this.removeFromSelectedList(this.applicationId);
        } else{
            this.performUpdate(this.applicationId, updatedData);
            alert("Application updated");
          }
    } else{
      this.performUpdate(this.applicationId, updatedData);
      if(storedStatus === "selected"){
        this.updateSelectedScore(this.applicationId, updatedData);
      }
      alert("Application updated");
    }
    this.application.status = currentStatus;
  }

  performUpdate(id : number, updatedData : any){
    this.applicationService.updateApplication(id, updatedData).subscribe(res => {
    }, err => {
      alert(err.error.errorMessage);
    });
  }

  addToSelectionList(id : number){
    this.selectionService.addSelection(id).subscribe(res => {
      alert("Application added to selected list");
    }, err => {
      alert(err.error.errorMessage);
    });
  }

  removeFromSelectedList(id : number){
    this.selectionService.deleteSelection(id).subscribe(res => {
      alert("Application removed from selected list");
    }, err => {
      alert(err.error.errorMessage);
    });
  }

  updateSelectedScore(id : number, updatedData : any){
    this.selectionService.updateScore(id, updatedData).subscribe(res => {
      console.log("Application updated");
    }, err => {
      alert(err.error.errorMessage);
    });
  }
}
