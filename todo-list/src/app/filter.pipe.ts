import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../app/todo/todo';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], searchText: string | null) {
    if (!searchText) {
      return todos;
    }
    return todos.filter((todo: Todo) =>
      todo.task.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
