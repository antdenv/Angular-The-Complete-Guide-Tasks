import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isSecretDetailsVisible = false;
  public buttonClicksList = [];

  public onDisplayDetailsClick(): void {
    this.isSecretDetailsVisible = !this.isSecretDetailsVisible;
    this.buttonClicksList.push(`Click was initiated at: ${new Date().toLocaleTimeString('ru')}`);
  }
}
