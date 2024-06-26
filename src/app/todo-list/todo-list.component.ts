import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgFor } from '@angular/common';
import { DailyTodo, WeekDays } from '../db.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgFor, MatSlideToggleModule],
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent {
  data: DataService;
  dailyTodos: DailyTodo[] = [];
  loading: boolean = true;

  constructor(data: DataService) {
    this.data = data;
  }

  async ngOnInit() {
    this.dailyTodos = await this.data.getTodos()
    this.loading = false
  }
}


const data = [
  {
    id: "AAAAABBBCCC",
    order: 1,
    title: "do 10 push ups",
    points: 10,
    icon: 1,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]
  },
  {
    id: "AAAAABBBCCD",
    order: 2,
    title: "Read a book",
    points: 20,
    icon: 20,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCF",
    order: 3,
    title: "Go for a run",
    points: 30,
    icon: 20,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCG",
    order: 4,
    title: "Do yoga",
    points: 15,
    icon: 19,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCU",
    order: 10,
    title: "Watch a movie",
    points: 35,
    icon: 99,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCV",
    order: 9,
    title: "Take a nap",
    points: 30,
    icon: 39,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCW",
    order: 8,
    title: "Listen to music",
    points: 5,
    icon: 66,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCX",
    order: 5,
    title: "Learn React",
    points: 50,
    icon: 100,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCY",
    order: 6,
    title: "Cook dinner",
    points: 25,
    icon: 27,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  },
  {
    id: "AAAAABBBCCZ",
    order: 7,
    title: "Write code",
    points: 40,
    icon: 87,
    days: [WeekDays.Monday, WeekDays.Thursday, WeekDays.Tuesday]

  }
]