import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHeaderComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() breadcrumb: Array<string> = []
  constructor() { }

  ngOnInit(): void {
  }

}
