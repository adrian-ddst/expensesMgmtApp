import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title: string = 'expensesMgmtApp';
    time: string;
    tickTockInterval: number | undefined;

    constructor() {
        this.time = (new Date).toString();
    }

    ngOnInit(): void {
        this.tickTockInterval = setInterval(() => {
            this.time = (new Date).toString();
        }, 1000);
    }

    clickNavItem(): void {

    }

    ngOnDestroy(): void {
        clearInterval(this.tickTockInterval);
    }
}
