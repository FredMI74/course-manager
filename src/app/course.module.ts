import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { CourseListComponent } from "./courses/course-list.component";
import { CourseInfoComponent } from './courses/course-info.component';
import { FormsModule } from "@angular/forms";
import { ReplacePipe } from "./pipe/replace.pipe";
import { CommonModule } from "@angular/common";
import { StarComponent } from './start/star.component';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        StarComponent,
        ReplacePipe
    ],
    imports: [
        CommonModule,        
        FormsModule,
        RouterModule.forChild([
        {
            path: 'courses',component: CourseListComponent
          },
          {
            path: 'course/info/:id', component: CourseInfoComponent
          }
        ])
    ]
})

export class CourseModule {

}