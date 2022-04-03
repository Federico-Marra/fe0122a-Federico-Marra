import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  template: `
    <ul *ngFor="let item of listaTask">
      <ng-container *ngIf="item.completed">
        <li> » {{ item.title }}</li>
      </ng-container>
    </ul>
  `,

  styles: [
    `
    `,
  ],
})
export class CompletatiPage implements OnInit {
  listaTask: Todo[] = [];

  constructor(private taskService: TaskService) {}

  getTask() {
    this.listaTask = this.taskService.getTask();
  }

  ngOnInit() {
    this.getTask();
  }
}
