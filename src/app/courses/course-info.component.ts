import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
    
    courseID: number;

    constructor(private acitiveRoute: ActivatedRoute){ }

    ngOnInit(): void{
        this.courseID = +this.acitiveRoute.snapshot.paramMap.get('id');
    }
}