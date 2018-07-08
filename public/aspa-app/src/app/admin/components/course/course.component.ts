import {
  Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef, ViewChild
} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  course;
  @ViewChild('op') op;

  constructor(private courseService: CourseService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getCourse(id);
    });
  }

  ngOnInit() {
  }

  getCourse(id) {
    this.courseService.getCourse(id).subscribe(course => {
      this.course = course;
    });
  }

  openPanel(event) {
    console.log(event);
    this.op.toggle(event.event)
  }
}
