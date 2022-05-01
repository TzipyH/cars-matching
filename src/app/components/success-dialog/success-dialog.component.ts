import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
