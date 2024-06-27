import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { TasksComponent } from '../pages/tasks/tasks.component';
import { StatsComponent } from '../pages/stats/stats.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'stats', component: StatsComponent},
    {path: 'tasks', component: TasksComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent},

];
