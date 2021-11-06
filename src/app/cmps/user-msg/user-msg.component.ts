import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss'],
})
export class UserMsgComponent implements OnInit {
  constructor(private msgService: MsgService) {}

  msg: string = '';
  subscription!: Subscription;

  onCloseMsg() {
    this.msgService.setMsg('');
  }

  ngOnInit(): void {
    this.subscription = this.msgService.userMsg$.subscribe((msg) => {
      this.msg = msg;
    });
  }
}
