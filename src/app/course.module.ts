import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { CourseListComponent } from "./courses/course-list.component";
import { CourseInfoComponent } from './courses/course-info.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "./shared/component/start/star.module";
import { ReplacePipe } from "./shared/pipe/replace.pipe";
import { AppPipleModule } from "./shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,        
        FormsModule,
        StarModule,
        AppPipleModule,
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