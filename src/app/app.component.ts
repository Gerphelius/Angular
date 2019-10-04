import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task-one';

  public currentSelection: string = 'default';

  public changeStateOf(currentSelection: string) {
    this.currentSelection = currentSelection;
  }
}
