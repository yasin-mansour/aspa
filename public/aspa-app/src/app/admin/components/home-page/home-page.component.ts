import {Component, Input, OnInit} from '@angular/core';
import {CardV1} from '../../../shared/interfaces/card-v1.interface';
import {AdminService} from '../../services/admin.service';

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

  course: CardV1 = {
    title: 'title-course',
    icon: 'fa-tasks',
    description: 'add-new-course',
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
  trainerQuestions = this.getCourseQuestion();

  constructor(private admin: AdminService) {
    this.trainer.click = this.trainerClick.bind(this);
  }

  ngOnInit() {
  }


  getCourseQuestion() {
    return [
      {
        value: '',
        key: 'first_name',
        label: 'reg-first-name',
        inputClass: '',
        class: 'form-group',
        containerClass: ['col-md-12'],
        required: true,
        controlType: 'auto_complete',
        field: 'name',
        filter: (query, question) => {
          this.admin.autoComplete(query.query)
            .map((data) => {
              data.map(user => {
                user['name'] = user['first_name'] + ' ' + user['last_name'];
              })
              return data;
            })
            .subscribe(data => {
              question.filtered = data;
            });
        }
      }
    ];
  }

  trainerClick() {
    this.trainerDisplay = true;
  }
}
