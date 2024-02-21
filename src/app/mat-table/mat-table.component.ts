import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppdataService } from '../appdata.service';
import { SearchFilterPipe } from '../search-filter.pipe';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import { Interface } from 'readline';

//this data should come from API
//need to loop through the response object

    
interface DetailsElement {
  description: string;
}

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, SearchFilterPipe, ReactiveFormsModule, FormsModule, NgFor, MatFormFieldModule,
     MatInputModule, FlexLayoutModule, MatIconModule],
})


export class MatTableComponent {
    path: string = "/assets/images/OIP.jpg";
    alttext: string = "devon logo";
    path1:string="/assets/images/NIIT.jpg"
    alttext1:string='niit logo'
    name=new FormControl('');
    searchItem:string='';
    columnsToDisplay = ['position', 'certificationName','certificationProviderName', 'trainingDuration','trainingLevel',
    'categoryName','trainerName','trainingDetail'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay];
    public dataSource!: MatTableDataSource<any>;
    public data = [];
    public results = [];
    title = 'crmapp';
    newdata:any;
    expandedElement: DetailsElement | null | undefined;
    constructor(private _apiservice:AppdataService){
    }
     
    getAll()
    {
      this._apiservice.getData().subscribe((results) =>  {
      this.newdata = results;
      this.dataSource=new MatTableDataSource(this.newdata);
      //console.log('columnsToDisplayWithExpand = ', this.columnsToDisplayWithExpand);
      //console.log(this.dataSource);
    })
    }
    ngOnInit()
    {
      this.getAll();
    }

    public doFilter = (event: Event) => {
      //console.log(this.dataSource);
      const filterValue = (event.target as HTMLInputElement).value;
      //console.log(filterValue);
      this.dataSource.filter = filterValue.trim().toLowerCase();
      //console.log(this.dataSource.filter);
      //console.log(this.dataSource);
    }
    public addData= (event: Event) =>{
    {

    }
  }
    public removeData= (event: Event) =>{
      {
  
      }
    }
    

  }