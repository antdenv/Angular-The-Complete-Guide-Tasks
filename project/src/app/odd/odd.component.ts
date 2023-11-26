import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html',
    styles: [`
        p {
            background-color: #d9534f;
        }
    `],
})
export class OddComponent {
    @Input() oddNumber: number;
}