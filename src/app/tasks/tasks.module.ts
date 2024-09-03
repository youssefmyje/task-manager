import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskComponent } from './task/task.component';
import { TaskStatusColorDirective } from '../task-status-color.directive';
import { DateFormatPipe } from '../date-format.pipe';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    TaskListComponent,
    MainTaskComponent,
    TaskComponent,
    TaskStatusColorDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
})
export class TasksModule {}
