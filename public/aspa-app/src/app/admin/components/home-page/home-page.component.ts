import {Component, Input, OnInit} from '@angular/core';
import {CardV1} from '../../../shared/interfaces/card-v1.interface';
import {AdminService} from '../../services/admin.service';
import {ClassService} from '../../services/class.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  trainer: CardV1 = {
    title: 'title-trainer',
    icon: 'fa-user-o',
    description: 'add-new-trainers',
    buttonIcon: 'fa-plus',
    classes: {'orange': true},
    click: () => {

    }
  };

  student: CardV1 = {
    title: 'title-student',
    icon: 'fa-users',
    description: 'add-new-student',
    buttonIcon: 'fa-plus',
    classes: {'red': true},
    click: () => {
    }
  };

  classRoom: CardV1 = {
    title: 'title-class',
    icon: 'fa-tasks',
    description: 'add-new-class',
    buttonIcon: 'fa-plus',
    classes: {'blue': true},
    click: () => {
    }
  };

  material: CardV1 = {
    title: 'title-material',
    icon: 'fa-book',
    description: 'add-new-material',
    buttonIcon: 'fa-plus',
    classes: {'green': true},
    click: () => {
    }
  };

  trainerDisplay;
  classQuestions;

  constructor(private admin: AdminService, private classService: ClassService) {
    this.classRoom.click = this.trainerClick.bind(this);
    this.classQuestions = this.classService.getClassQuestion();
  }

  ngOnInit() {
  }

  trainerClick() {
    this.trainerDisplay = true;
  }

  create(data) {
    this.classService.createClass(data).subscribe();
  }
}
