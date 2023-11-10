import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input()
	bookCover:string = ""
	@Input()
	bookLabel:string=""
	@Input()
	bookTitle:string=""
	@Input()
	bookType:string =""
	@Input()
	bookPrice:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
