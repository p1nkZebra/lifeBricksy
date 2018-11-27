import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {classToPlain, plainToClass} from "class-transformer";
import {map} from "rxjs/internal/operators";
import {RawGoal} from "@app/model/chart/rawGoal";

@Injectable()
export class GoalService {

    constructor(private http: HttpClient) {
    }


    addNewGoal(goal:RawGoal){
        return this.http.post("life-bricksy/add-new-goal",classToPlain(goal));
    }
}