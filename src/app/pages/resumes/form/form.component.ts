import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Resumes } from 'src/app/service/resumes.model';
import { ResumesService } from 'src/app/service/resumes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(public service: ResumesService, private toastr:ToastrService) { }

	onSubmit(form: NgForm) {
		this.service.postResume()
			.subscribe({
				next: res => {
					if (Array.isArray(res)) {
						this.service.list = res as Resumes[];
						this.service.resetForm(form);
						this.toastr.success('Curriculo enviado com sucesso', 'Curriculo anexado');
					} else {
						console.error('A resposta do servidor não é um array.');
					}
				},
				error: err => { console.log(err); }
			});
	}
 /*
	onSubmit(form: NgForm) {
		this.service.postResume()
			.subscribe({
				next: res => {
					this.service.list = res as Resumes[]
					this.service.resetForm(form)
					this.toastr.success('Curriculo enviado com sucesso', 'Curriculo anexado')
				},
				error: err => { console.log(err)}
			})
	}*/

}
