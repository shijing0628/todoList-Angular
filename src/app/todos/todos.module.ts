import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [TodosComponent],
})
export class TodosModule {}
