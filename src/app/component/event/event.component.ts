import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() name: any;
  @Input() id: any;
  @Input() type: any;
  @Input() date: any;
  @Input() venue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
