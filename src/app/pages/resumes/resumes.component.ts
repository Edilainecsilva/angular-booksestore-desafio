import { Component, OnInit } from '@angular/core';
import { ResumesService } from 'src/app/service/resumes.service';
import { ToastrService } from 'ngx-toastr';
import { Resumes } from 'src/app/service/resumes.model';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

  constructor(public service:ResumesService, private toastr:ToastrService) { }

  ngOnInit(): void {
		this.service.refreshList();
  }

	onDelete(id:number){
		if(confirm("Você tem certeza que deseja excluir?"))
			this.service.deleteResume(id)
				.subscribe({
					next: res => {
						this.toastr.error('Deletado com sucesso!', 'Curriculo deletado')
						this.service.list = res as Resumes[]
					},
					error: err => { console.log(err)}
				})
	}
}
