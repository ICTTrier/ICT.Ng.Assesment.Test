import { Component, OnInit, Input} from '@angular/core';
import {SolutionService} from '../services/solution.service';
import { getMatIconNoHttpProviderError } from '../../../node_modules/@angular/material';
@Component({
  selector: 'app-solution-cmp',
  templateUrl: './solution-cmp.component.html',
  styleUrls: ['./solution-cmp.component.css']
})
export class SolutionCmpComponent implements OnInit {
  
  //@Input() fromCurrency:String;
  //@Input() toCurrency:String;
  //@Input() delay:String;
  @Input() appRateList;
  returnObj:any={};
  xchangeRates :any=[];
  static hide:boolean=true;
  noOfTimes:number=1;
  constructor(private solutionService : SolutionService) {
  }

  ngOnInit() {
  
    for(let x of this .appRateList)
    {
      
      setTimeout(() => {
        this.getRate(x.from,x.to);
        this.noOfTimes++;
        
      }, this.noOfTimes*1000);
      //
  }
  SolutionCmpComponent.hide=false;
}
  getRate(from:String, to:String){
  this.solutionService.getExchangeRates(from,to).subscribe(data=>{
    if (data == null || data==undefined)
    {
      //console.log("error tile");
      this.returnObj.f="Unable to load";
      this.returnObj.t="";
      this.returnObj.r="";
      this.returnObj.color='#FF0000';
    }
    else if (data["Realtime Currency Exchange Rate"]==undefined)
    {
      //console.log("no relevent data");
      this.returnObj.f="Try to load agai";
      this.returnObj.t="";
      this.returnObj.r="";
      this.returnObj.color='#ADFF2F';
    }
    else{
      
    let  innerObj=data["Realtime Currency Exchange Rate"];
    this.returnObj.f=innerObj["1. From_Currency Code"];
    this.returnObj.t=innerObj["3. To_Currency Code"];
    this.returnObj.r=innerObj["5. Exchange Rate"];
    this.returnObj.color='#142A5C';
    }
    this.xchangeRates.push(this.returnObj);
  });
  }
  getHide()
  {
    return SolutionCmpComponent.hide;
  }


}
