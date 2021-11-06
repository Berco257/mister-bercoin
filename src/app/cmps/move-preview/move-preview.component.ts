import { Component, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss'],
})
export class MovePreviewComponent {
  @Input() move!:Move
  @Input() bitcoinRate!:any
}
