import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
})
export class GameControlComponent {
    private intervalId = null;
    @Output() fireNumber = new EventEmitter<number>();
    @Output() gameIsOver = new EventEmitter<boolean>();

    public onStartGame(): void {
        if (this.intervalId === null) {
            let currentNumber = 1;
            this.intervalId = setInterval(() => this.fireNumber.emit(currentNumber++), 1000);
        }
    }

    public onStopGame(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.gameIsOver.emit(true);
            this.intervalId = null;
        }
    }
}