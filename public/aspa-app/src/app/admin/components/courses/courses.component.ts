import {
  Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {CourseService} from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
  courses;
  paginate = {};
  loading = false;

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  getCourses(event: any = {first: 0}) {
    this.loading = true;
    this.cdr.detectChanges();
    this.courseService.getCourses(++event.first, true, false).subscribe(paginate => {
      this.courses = paginate['data'];
      this.paginate = paginate;
    }, () => {
    }, () => {
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
