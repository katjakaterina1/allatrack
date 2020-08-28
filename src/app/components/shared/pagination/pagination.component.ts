import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, DoCheck {
  @Input() private total: number;
  @Input() public activePage = [];
  @Output() public pageChanged: EventEmitter<object> = new EventEmitter();
  public pageArray: Array<number> = [];
  public pages: number;
  constructor() { }
  ngDoCheck(): void {
    this.pageArray = [];
    this.pages = Math.ceil(this.total / 10);
    for (let i = 1; i <= this.pages; i++) {
      this.pageArray.push(i);
    }
  }
  ngOnInit(): void {
  }
  onPageChange(page: number): void {
    if (page < 1 || page > this.pageArray.length) {
      return;
    }
    this.activePage = [page];
    this.pageChanged.emit({
      activePage: this.activePage
    });
  }
  showMoreNews(): void{
    const currentPage = this.activePage[this.activePage.length - 1];
    if (currentPage !== this.pages){
      this.activePage.push(currentPage + 1);
      this.pageChanged.emit({
        activePage: this.activePage
      });
    }
    // this.activePage.push(page + 10);
  }
}
