import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Saboteur } from 'src/shared/models/quiz.model';
import { QUESTIONS } from 'src/shared/quizquestions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Output() clearResults = new EventEmitter<any>();
  @Input() quizResults: any;
  resultsMap: Map<string, number>;
  formattedResults: Array<any>;

  constructor() { }

  ngOnInit() {
    this.resultsMap = new Map();

    Object.values(Saboteur).forEach(saboteur => {
      this.resultsMap.set(saboteur, 0);
    });

    // Add the values to the map
    QUESTIONS.forEach(question => {
      const value = this.quizResults[question.text];
      this.resultsMap.set(question.theme, this.resultsMap.get(question.theme) + (value ? value : 0));
    });

    this.formattedResults = Array.from(this.resultsMap).map(entry => {
      return {
        name: entry[0],
        value: entry[1]
      };
    });
  }

  restart() {
    this.clearResults.emit();
  }
}
