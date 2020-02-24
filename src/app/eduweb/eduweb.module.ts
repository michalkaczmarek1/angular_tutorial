import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'eduweb/hello-world', component: HelloWorldComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EduwebModule { }
