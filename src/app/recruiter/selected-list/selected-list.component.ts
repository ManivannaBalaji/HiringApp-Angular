import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../service/selection.service';
declare let $ : any;

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  selectedList: any;
  sortOrder: string = '';
  searchJob : string = '';
  searchLocation : string = '';
  searchConstraints: string[] = [this.sortOrder, this.searchJob, this.searchLocation];

  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.getAllSelectedList();
  }

  getAllSelectedList() {
    this.selectionService.getAllSelection().subscribe(res => {
      this.selectedList = res;
    }, err => {
      console.log(err);
    });
  }

  generateSheet() {
    $("#selectedTable").table2excel({
        exclude: ".noExport",
        filename: "SelectedList.xls",
    });
  }

}
