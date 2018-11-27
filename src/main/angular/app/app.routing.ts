import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {EventTableComponent} from "@app/manageTables/event/event-table.component";
import {GoalComponent} from "@app/chartGoal/goal.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'event-table', pathMatch: 'full'},
    {path: 'event-table', component: EventTableComponent},
    {path: 'goal',component: GoalComponent},

    // {
    //     path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard],
    //     data: {expectedRoles: [Role.ADMIN]}
    // },
    // {path: '**', component: NotFoundPageComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
