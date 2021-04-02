import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  // Variable for new todo
  newTodo: string = '';

  // Variable for search text in filter
  searchText: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  todos: Todo[] = [
    {
      task: 'do laundry',
      completed: true,
    },
    {
      task: 'walk Gus',
      completed: true,
    },
    {
      task: 'finish homework',
      completed: false,
    },
    {
      task: 'give Gus a bath',
      completed: false,
    },
  ];

  // function to add new todo item to list
  addTask() {
    // Push new todo to todos array
    this.todos.push({
      task: this.newTodo,
      completed: false,
    });
    // Clear input text
    this.newTodo = '';
  }

  // function to delete todo item from list
  removeTask(i: number) {
    this.todos.splice(i, 1);
  }

  // function to "complete" a task
  completeTask(i: number) {
    this.todos[i].completed = true;
  }
}
