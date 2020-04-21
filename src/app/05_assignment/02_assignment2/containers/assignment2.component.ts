import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

    @Input()
    todoslist:Todo[];

    @Input()
    selectedTodo: Todo;
  
    @Output()
    todoSelected = new EventEmitter<Todo>();

    onSelectTodo(todo: Todo) {
      this.todoSelected.emit(todo);
    }
}
