import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { QUESTIONS } from 'src/shared/quizquestions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions = QUESTIONS;
  quizForm = this.fb.group({});
  scores = ['Strongly Disagree', '', 'Neutral', '', 'Strongly Agree'];
  @Output() submitResults = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    for (const question of this.questions) {
      this.quizForm.addControl(question.text, new FormControl('', Validators.required));
    }
  }

  onSubmit() {
    const results = this.quizForm.value;
    this.submitResults.emit(results);
  }

}
