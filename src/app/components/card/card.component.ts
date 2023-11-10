import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	bookCover:string = ""
	@Input()
	bookTitle:string=""
	@Input()
	bookLabel:string=""
	@Input()
	bookType:string =""
	@Input()
	bookPrice:string = ""
	@Input()
  id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
