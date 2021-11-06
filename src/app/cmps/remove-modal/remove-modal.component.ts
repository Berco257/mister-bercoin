import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss'],
})
export class RemoveModalComponent {
  @Input() isRemoveModal: boolean = false;
  @Output() toggleRemoveModal = new EventEmitter<boolean>();

  toggleModal(res: boolean) {
    this.toggleRemoveModal.emit(res);
  }
}
