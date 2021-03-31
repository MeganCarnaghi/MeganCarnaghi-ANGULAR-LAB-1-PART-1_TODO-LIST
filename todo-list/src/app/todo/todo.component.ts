import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'do laundry',
      completed: false,
    },
    {
      task: 'walk dog',
      completed: true,
    },
    {
      task: 'finish homework',
      completed: false,
    },
    {
      task: 'meal prep',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
