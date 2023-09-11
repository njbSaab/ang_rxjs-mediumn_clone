import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
})
export class BackendErrorsComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  public errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const message = this.backendErrorsProps[name].join(', ');

        return `${name} ${message}`;
      },
    );
  }
}
