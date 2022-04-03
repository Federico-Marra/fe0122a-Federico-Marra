import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  template: `
    <div>
      <input type="text" name="task" [(ngModel)]="nomeTask" />
      <label id="aggiungi" for="task" (click)="addTask(nomeTask)"
        >Add task
      </label>
    </div>

    <ul *ngFor="let item of listaTask">
      <ng-container *ngIf="!item.completed">
        <li (click)="completedTask(this.item.id)">{{ item.title }} ➥ </li>
      </ng-container>
</ul>
  `,

  styles: [
    `
      div {
        input {
          margin-right: 20px;
          margin-bottom: 5px;
          height: 30px;
          width: 150px;
          font-size: 20px;
          border:none;
          border-bottom: 1px solid black;

          background-color: transparent;
          &:focus, &:active {
            background-color: transparent;
            border:none;
          }
        }
        #aggiungi {
          cursor: pointer;
          background-color: transparent;
          font-size: 20px;
          border-radius: 5px;
          padding: 4px;
          font-weight: bold;
          transition: transform 0.3s;

          &:hover {
            background-color: grey;
            color: white;
          }
          &:active {
            background-color: lightgrey;
            transform: scale(.8,.8);
          }
        }
      }
      li{
        list-decoration:none;
      }

      tr {
        td {
          padding: 10px;
          font-size: 30px;
        }
        button {
          cursor: pointer;
          background-color: white;
          height: 30px;
          width: 30px;
          font-size: 20px;
          color: black;
          border-radius: 15%;
          box-shadow: 5px 5px pink;
          border: transparent;
          &:hover {
            background-color: rgb(255, 146, 164);
            color: green;
          }
        }
      }
    `,
  ],
})
export class TodosPage implements OnInit {
  nomeTask!: string;
  listaTask: Todo[] = [];

  constructor(private taskService: TaskService) {}

  getTask() {
    setTimeout(() => {
      this.listaTask = this.taskService.getTask();
    }, 2000);
  }

  addTask(nomeTask: string) {
    setTimeout(() => {
      this.taskService.addTask(nomeTask);
    }, 10);
  }

  completedTask(id: number) {
    setTimeout(() => {
      this.taskService.completedTask(id);
    }, 10);
  }

  ngOnInit() {
    this.getTask();
  }
}
