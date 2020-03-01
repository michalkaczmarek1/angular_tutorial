import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { EduwebMainComponent } from './eduweb-main/eduweb-main.component';

const routes: Routes = [
  { path: 'eduweb/hello-world', component: HelloWorldComponent, pathMatch: 'full'}, 
  { path: 'eduweb', component: EduwebMainComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [HelloWorldComponent, EduwebMainComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class EduwebModule { }
