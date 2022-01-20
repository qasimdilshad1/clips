import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TabsContainerComponent } from 'src/app/shared/tabs-container/tabs-container.component';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth');
  }
  ngOnDestroy() {
    this.modal.unregister('auth');
  }
}
