import { Course } from '../../model/course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

 @Input() courses: Course[] = [];
 @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor( public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }

}
