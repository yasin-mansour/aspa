import {
  Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef, ViewChild
} from '@angular/core';
import {ClassService} from '../../services/class.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassComponent implements OnInit {
  classRoom;
  @ViewChild('op') op;

  constructor(private classService: ClassService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getClass(id);
    });
  }

  ngOnInit() {
  }

  getClass(id) {
    this.classService.getClass(id).subscribe(classRoom => {
      this.classRoom = classRoom;
    });
  }

  openPanel(event) {
    console.log(event);
    this.op.toggle(event.event)
  }
}
