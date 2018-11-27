import {Component, OnDestroy, OnInit} from '@angular/core';
import {RawEvent} from "@app/model/tables/rawEvent";
import {EventService} from "@app/service/event.service";
import {FormBuilder} from "@angular/forms";
import {finalize, tap} from "rxjs/operators";

import * as CanvasJS from '../../chartGoal/canvasjs.min';

@Component({
    selector: 'event-table',
    providers: [EventService],
    templateUrl: './event-table.component.html',
    styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit, OnDestroy {

    allEvents: RawEvent[] = [];
    selectedEventsLine: RawEvent[] = [];

    //модальное окно
    doOpenAddEventModal: boolean = false;


    constructor(private httpService: EventService,
                private builder: FormBuilder
    ) {

    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
        // this.updateTable();
    }

    updateTable() {
        this.httpService.getEventTable()
            .pipe(
                tap(() => {
                    // do something before all actions
                }),
                finalize(() => {
                    // do something after all actions
                })
            ).subscribe(
            response => {
                this.allEvents = response;
            },
            (error) => {
                console.log(error);
            });
    }

    //КНОПКИ
    //кнопки таблицы
    onEditEvent() {

    }

    onDeleteEvent() {

    }

    onAddEvent() {

    }

    //кнопки модального окна
    closeModalEvent() {

    }

    saveNewEvent() {

    }
}