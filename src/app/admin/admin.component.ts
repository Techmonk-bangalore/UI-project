import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  candidate: any;

  constructor(private http: HttpClient,private service: ServiceService) { }
  chartLabels: string[]=[];
  chartData: any=[];
  chartType = 'doughnut';

  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'doughnut';
  public JSONobject = {};
  public isDataAvailable:boolean = false;
  ngOnInit() {
    let labels:string[] = [];
    let data:number[] = [];
    this.service.getVoteResults().subscribe((response:any) => {
      if(response){
        this.candidate = response;
        if(this.candidate){
          for (var i = 0; i < this.candidate.length; i++)
          {
            labels.push(String(this.candidate[i].name));
            data.push(this.candidate[i].currentVote);
          };
          this.pieChartData = data;
          this.pieChartLabels = labels;
          this.isDataAvailable = true;
        }
        }
        // this.voted = true;
      })
      }
      public chartClicked(e:any):void {}
      public chartHovered(e:any):void {}  
    }
