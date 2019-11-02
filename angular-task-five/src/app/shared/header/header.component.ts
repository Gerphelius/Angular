import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() private currentSelection = new EventEmitter<string>();

  constructor() { }

  changeTo(e) {
    this.currentSelection.emit(e.target.id);
  }
}
