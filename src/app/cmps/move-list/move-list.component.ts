import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent {
  @Input() title: string = '';
  @Input() moves!:Move[]
  @Input() bitcoinRate!:any
}
