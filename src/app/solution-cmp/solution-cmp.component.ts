import { Component, OnInit, Input } from '@angular/core';
import { SolutionService } from '../solution.service';

@Component({
  selector: 'solution-cmp',
  templateUrl: './solution-cmp.component.html',
  styleUrls: ['./solution-cmp.component.css'],
  providers: [SolutionService]
})
export class SolutionCmpComponent implements OnInit {
  @Input() fromCurrency = "";
  @Input() toCurrency = "";
  @Input() delay = 0;

  public fromName = "";
  public toName = "";
  public exchangeRate = 0;
  public lastRefresh = "";
  public errorMessage = "";
  public isLoading = true;
  public timeout = 0;
  public waiting = false;

  constructor(public solutionService: SolutionService) { }

  ngOnInit() {
    this.loadRate(this.delay);
  }

  private loadRate(delay: number) {
    //this.errorMessage = "";
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.isLoading = true;
      this.solutionService.getExchangeRate(this.fromCurrency,this.toCurrency).subscribe((data) => {
        this.isLoading = false;
        if(data["Realtime Currency Exchange Rate"]) {
          this.fromName = data["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
          this.toName = data["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
          this.exchangeRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
          this.errorMessage = "";
        } else {
          this.errorMessage = "Unable to load.";
          this.timeout = delay;
          setTimeout(() => {
            this.loadRate(delay*4);
          }, 2000);
        }
      });
    }, delay);
  }

}
