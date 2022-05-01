import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SummaryTableItem } from 'src/app/model/summary-table-item';
import { UsersService } from 'src/app/services/users.service';
import { SummaryTableDataSource } from './summary-table-datasource';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SummaryTableItem>;
  dataSource: SummaryTableDataSource;

  displayedColumns = ['header','male', 'female'];

  constructor(private usersService: UsersService) {
    this.dataSource = new SummaryTableDataSource(usersService.getTableData());
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
