import { Component, Input } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgIf } from '@angular/common';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DailyTodo, Todo, icons } from '../db.service';
import { DataService } from '../data.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@Component({
  standalone: true,
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  imports: [MatCheckboxModule,  FontAwesomeModule, NgIf]
})

export class TodoItemComponent {
  data!: DataService;
  @Input() dailyTodo!: DailyTodo;
  todo!: Todo;
  icon!: IconDefinition;
  isLoading = true;

  constructor(data: DataService) {
    this.data = data;
  }

  async ngOnInit() {
    this.todo = await this.data.getTodo(this.dailyTodo.todoId)
    this.icon = icons[this.todo.icon]
    this.isLoading = false 
  }
}
