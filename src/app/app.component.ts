import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public firedNumber: number | null = null;

  public onFireNumber(firedNumber: number): void {
    this.firedNumber = firedNumber;
  }

  public onGameIsOver(isGameOver: boolean): void {
    if (isGameOver) {
      this.firedNumber = null;
    }
  }
}
