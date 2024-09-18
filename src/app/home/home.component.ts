import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = '';
  comment: string = '';
  linkUrl: string = '';

  // get title from route and get comment from data
  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data['title'];
    this.comment = this.route.snapshot.data['comment'];
    this.linkUrl = this.route.snapshot.data['linkUrl'];
  }
}
