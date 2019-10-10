import {Component} from '@angular/core';

export interface IExchangeRates {
  from: string;
  to: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public exchangeRates: IExchangeRates[] = [
    {from: 'BTC', to: 'EUR'},
    {from: 'XVG', to: 'EUR'},
    {from: 'ETH', to: 'EUR'},
    {from: 'ADA', to: 'EUR'},
    {from: 'EOS', to: 'EUR'},
    {from: 'IOT', to: 'EUR'},
    {from: 'TRX', to: 'EUR'},
    {from: 'BTC', to: 'USD'},
    {from: 'XVG', to: 'USD'},
    {from: 'ETH', to: 'USD'},
    {from: 'ADA', to: 'USD'},
    {from: 'EOS', to: 'USD'},
    {from: 'IOT', to: 'USD'},
    {from: 'TRX', to: 'USD'},
    {from: 'BTC', to: 'GBP'},
    {from: 'XVG', to: 'GBP'},
    {from: 'ETH', to: 'GBP'},
    {from: 'ADA', to: 'GBP'},
    {from: 'EOS', to: 'GBP'},
    {from: 'IOT', to: 'GBP'},
    {from: 'TRX', to: 'GBP'}
  ];
  public title = 'ict-ng-test';

  public refresh(): void {
    // little trick to copy the model to force angular to refresh the view
    // TODO: should use ChangeDetectionStrategy and markForCheck
    this.exchangeRates = JSON.parse(JSON.stringify(this.exchangeRates));
  }
}
