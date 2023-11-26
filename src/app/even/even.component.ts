import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styles: [`
        p {
            background-color: #5cb85c;
        }
    `],
})
export class EvenComponent {
    @Input() evenNumber: number;
}