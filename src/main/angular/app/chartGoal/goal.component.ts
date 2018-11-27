import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoalService} from "@app/service/goal.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import * as CanvasJS from './canvasjs.min';
import {Dictionary} from "async";
import {RawGoal} from "@app/model/chart/rawGoal";
import {finalize, tap} from "rxjs/operators";

export interface GoalInputs extends Dictionary<AbstractControl>{
     goalNameInputFormControlName:AbstractControl,
    goalValueInputFormControlName:AbstractControl,
}
@Component({
    selector: 'goal',
    providers: [GoalService],
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit, OnDestroy {

    nameOfGoal: string;
    valueThatLeftToComplete: number;
    valueAlreadyDone:number = 0;
    valueOfGoal:number;

    doOpenModalWindow:boolean = false;

    goalFormGroup:FormGroup;

    goalNameInputFormControl:FormControl = new FormControl();
    goalValueInputFormControl:FormControl = new FormControl();


    constructor(private httpService: GoalService,
                private builder: FormBuilder
    ) {
        this.goalFormGroup = this.builder.group({
            goalNameInputFormControlName: this.goalNameInputFormControl,
            goalValueInputFormControlName: this.goalValueInputFormControl,
        } as GoalInputs);
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
        //рисуем диаграмму
        this.drawChartsTest(this.getNameOfGoal(),this.getGoalValue(),this.getValueThatAlreadyDone());
    }


// рисовка таблицы
  drawChartsTest(nameOfGoal:string, valueOfGoal:number , valueAlreadyDone:number) {
        //получаем имя из БД

        let valueThatLeftToComplete = valueOfGoal - valueAlreadyDone;


        this.valueThatLeftToComplete = this.valueOfGoal - this.valueAlreadyDone;

        //получаем значение которое осталось
        let chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: nameOfGoal +" "+ valueOfGoal
            },
            data: [{
                type: "pie",
                showInLegend: true,
                toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    {y: valueAlreadyDone, name: "Already done"},
                    {y: valueThatLeftToComplete, name: "Left to complete"},
                ]
            }]
        });

        chart.render();

    }


// Данные для работы с диаграммой
    //получить название цели .
    getNameOfGoal() :string {

        return "Бег"
    }

    getValueThatAlreadyDone() : number {

        return 1000;
    }

    getGoalValue():number{
    return 10000;
    }


    //КНОПКИ
    closeModal(){
        this.doOpenModalWindow = false;
    }
    addGoalModal(){
        console.log("saveNewGoal");

        let inputs = this.goalFormGroup.controls as GoalInputs;

        let goalName:string = inputs.goalNameInputFormControlName.value;
        let goalValue:number = inputs.goalValueInputFormControlName.value;

        let valueOfDone:number = 0;
        let tag:string = "Test Tag";

        //name nullable
        //tag nullable

        //valueOfGoal nullable
        //valueOfDone nullable

        if (goalName.trim().length == 0) {
            console.log("ERROR: empty value for goalName");
            return;
        }

        let goal: RawGoal = new RawGoal();

        goal.name = goalName;
        goal.value = goalValue;

        goal.tag = tag;
        goal.progress = valueOfDone;

        this.httpService.addNewGoal(goal).pipe(
            tap(() => {

            }),
            finalize(() =>{
                this.closeModal();
            })
        ).subscribe();

    }

    doOpenModal(){
        this.doOpenModalWindow = true;
    }


}