import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
})
export class UserPreviewComponent {
  @Input() loggedInUser!: User;
  @Input() bitcoinRate!: any;
}
