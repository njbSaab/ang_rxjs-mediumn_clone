import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleInputInterface } from '../../../types/article-input.interface';
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }
  public onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
