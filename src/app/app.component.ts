import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mental Fitness Quiz';
  quizResults = undefined;

  results(results: any) {
    this.quizResults = results;
  }

  restart() {
    this.quizResults = undefined;
  }
}
