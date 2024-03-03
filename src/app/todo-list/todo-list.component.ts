import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  title: string = '';

  addTodo() {
    if (this.title.trim().length === 0) return;
    this.todos.push({ title: this.title, completed: false });
    this.title = '';
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
}