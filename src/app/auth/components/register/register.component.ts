import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/register.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';
import { AuthServiceService } from '../../services/auth-service.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public isSubmitting$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthServiceService,
  ) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }
  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmitting', this.isSubmitting$);
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
    this.authService
      .register(this.form.value)
      .subscribe((currentUser: CurrentUserInterface) => {
        console.log('currentUser: ', currentUser);
      });
  }
}
