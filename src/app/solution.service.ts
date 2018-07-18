import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private endpoint: string = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency={$from_currency}&to_currency={$to_currency}&apikey=M57J7OETHP50THAO";

  constructor(private http: HttpClient) { }

  public getExchangeRate(from_currency: string, to_currency: string) {
    let url = this.endpoint.replace("{$from_currency}",from_currency);
    url = url.replace("{$to_currency}",to_currency);
    return this.http.get(url);
  }
}
