import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss'],
})
export class TransferFundsComponent {
  constructor(private msgService: MsgService) {}
  minAmount = 0.01;

  @Input() userCoins!: number;
  @Input() contactName!: string;
  @Output() transfer = new EventEmitter<number>();

  onTransfer(form: NgForm) {
    let msg = ''

    if (form.invalid) {
      msg = 'Invalid amount'
      this.msgService.setMsg(msg);
    } else {
      const { amount } = form.value;
      this.transfer.emit(amount);
      form.reset();
    }
  }
}
