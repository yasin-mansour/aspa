import {Component, OnInit} from '@angular/core';
import {HttpCommunicationService} from 'app/core/services/http-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpCommunicationService: HttpCommunicationService) {

  }

  ngOnInit() {

  }
}
