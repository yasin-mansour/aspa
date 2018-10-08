import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormStoreService} from '../../../services/form-store.service';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-dashboard-header-menu',
  templateUrl: './dashboard-header-menu.component.html',
  styleUrls: ['./dashboard-header-menu.component.css']
})
export class DashboardHeaderMenuComponent implements OnInit {

  newCourse: { question: any, display: boolean };
  newCategory: { question: any, display: boolean };

  constructor(private formStore: FormStoreService,
              private admin: AdminService) {
    this.newCourse = {
      question: formStore.newCourse,
      display: false
    };

    this.newCategory = {
      question: formStore.newCategory,
      display: false
    };
  }

  ngOnInit() {
  }

  createCourse(event) {
    this.admin.addCourse(event).subscribe(data => {
     this.admin.course = data;
    });
  }

  createCategory(event) {
    this.admin.addCategory(event).subscribe(data => {
      this.admin.course = data;
    });
  }
}
