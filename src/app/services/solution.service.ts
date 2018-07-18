import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http : HttpClient) { }


  getExchangeRates(fromCurrency:String,toCurrency:String):Observable<any>{
    //console.log("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+fromCurrency+"&to_currency="+toCurrency+"&apikey=M57J7OETHP50THAO");
    //Given API Key
    //return this.http.get<any>("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+fromCurrency+"&to_currency="+toCurrency+"&apikey=M57J7OETHP50THAO");
    
    
    // for demo API Keys
    return this.http.get<any>("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo");

  }
}
