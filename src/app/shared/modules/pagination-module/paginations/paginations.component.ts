import { Component, Input } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.scss'],
})
export class PaginationsComponent {
  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: string;

  public pagesCount: number;
  public pages: number[];
  constructor(private utilsService: UtilsService) {}
  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
