import { Component, OnInit, Pipe } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'bitcoin-chart',
  templateUrl: './bitcoin-chart.component.html',
  styleUrls: ['./bitcoin-chart.component.scss'],
})
export class BitcoinChartComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}
  prices!: any;
  public lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Price',
    },
  ];
  public lineChartLabels: Label[] = [];

  async ngOnInit(): Promise<void> {
    this.prices = await this.bitcoinService.getMarketPrice().toPromise();
    const data: number[] = [];
    this.prices.values.forEach((price = { x: '', y: 0 }): any => {
      data.push(price.y);
      const date = parseInt(price.x) * 1000;
      this.lineChartLabels.push(new Date(date).toLocaleDateString());
    });
    this.lineChartData[0].data = [...data];
  }

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          id: 'x-axis-0',
          position: 'left',
          gridLines: {
            color: '#434343',
            borderDash: [10],
          },
          ticks: {
            fontColor: '#717171',
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: '#434343',
            borderDash: [10],
          },
          ticks: {
            fontColor: '#717171',
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#e98a1a',
      backgroundColor: '#e98a1a2e',
      pointRadius: 0,
      borderWidth: 1,
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
}
