import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Resumes } from 'src/app/service/resumes.model';
import { ResumesService } from 'src/app/service/resumes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  constructor(public service: ResumesService, private toastr:ToastrService) { }

	ngOnInit(): void {
    this.service.refreshList();
  }

	onSubmit(form: NgForm) {
		this.service.postResume()
			.subscribe({
				next: res => {
					this.service.list = res as Resumes[]
					this.service.resetForm(form)
					this.toastr.success('Curriculo enviado com sucesso', 'Curriculo anexado')
					this.service.refreshList();
				},
				error: err => { console.log(err)}
			})
	}
}
