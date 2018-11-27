import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {classToPlain, plainToClass} from "class-transformer";
import {map} from "rxjs/internal/operators";
import {RawEvent} from "@app/model/tables/rawEvent";

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {
    }

    getEventTable() {
        return this.http.get<RawEvent[]>("java-people/get-event-table")
            .pipe(
                map(response => plainToClass(RawEvent, response as Object[])
                )
            );
    }

    addNewEvent(event: RawEvent) {
        return this.http.post("java-people/save-new-event", classToPlain(event));

    }

    deleteSelectedEvents(events: RawEvent[]) {
        return this.http.post("java-people/delete-events", classToPlain(events));
    }


}