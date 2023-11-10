import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	bookCover:string = ""
	bookTitle:string = ""
	bookType:string = ""
	bookPrice:string = ""
	bookDescriprion: string = ""
	bookAuthor: string = ""

	private id:string | null = "0"

	constructor(
		private route:ActivatedRoute
	) { }

	ngOnInit(): void {
			this.route.paramMap.subscribe( value =>
				this.id = value.get("id")
			)

			this.setValuesToComponent(this.id)
	}

	setValuesToComponent(id:string | null){
		const result = data.filter(book => book.id == id)[0]

		this.bookCover = result.bookCover
		this.bookTitle = result.bookTitle
		this.bookPrice = result.bookPrice
		this.bookType = result.bookType
		this.bookDescriprion = result.bookDescriprion
		this.bookAuthor = result.bookAuthor
	}
}
