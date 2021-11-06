import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1';
    return this.http.get(url).pipe(map((rate) => rate));
  }

  public getMarketPrice() {
    const url =
      'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
    return this.http.get(url).pipe(map((prices) => prices));
  }
}
