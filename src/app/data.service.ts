import { Injectable } from '@angular/core';
import { DailyTodo, DbService, Todo } from './db.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private db: DbService;
  private isInit = true;
  constructor(db: DbService) {
    this.db = db
  }

  private async init() {
    const day = UtilsService.getDaysSinceEpoch()
    const todos = await this.db.todos.toArray();

    for (const todo of todos) {
        if (todo.days.includes(todo.days[new Date().getDay()])) continue;
        const dailyTodo = await this.db.dailyTodo.get([day, todo.id])

        if (dailyTodo === undefined) {
            await this.db.dailyTodo.add({
                todoId: todo.id,
                completed: false,
                day: day
            })
        }
    }
  }

  public async getTodos(): Promise<DailyTodo[]> {
    if (this.isInit) {
      await this.init()
      this.isInit = false
    }

    return await this.db.dailyTodo.where({ day: UtilsService.getDaysSinceEpoch() }).toArray()
  } 

  public async toggleTodo(todo: DailyTodo) {
    todo.completed = !todo.completed
    await this.db.dailyTodo.update([todo.day, todo.todoId], {completed: todo.completed})
  }

  public async getTodo(id: string): Promise<Todo> {
    const todo = await this.db.todos.get(id)
    if (todo === undefined) {
        throw new Error("todo not found")
    }
    return todo;
  }

  public async addTodo(todo: Todo) {
    await this.db.todos.add(todo)
  }
}
