import {
  Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {ClassService} from '../../../core/services/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassesComponent implements OnInit {
  classes;
  paginate = {};
  loading = false;

  constructor(private classService: ClassService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  getCourses(event: any = {first: 0}) {
    this.loading = true;
    this.cdr.detectChanges();
    this.classService.getClasses(++event.first, true, false).subscribe(paginate => {
      this.classes = paginate['data'];
      this.paginate = paginate;
    }, () => {
    }, () => {
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
