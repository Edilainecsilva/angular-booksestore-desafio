import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Resumes } from './resumes.model';
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ResumesService {

	url:string = environment.apiBaseUrl + '/Resumes'
	list:Resumes[] = [];
	formData: Resumes = new Resumes()

  constructor(private http: HttpClient) { }

	refreshList(){
		this.http.get(this.url)
		.subscribe({
			next: res =>{
				console.log(res)
				this.list = res as Resumes[]
			},
			error: err=> { console.log(err)}
		})
	}

	postResume(){
		return this.http.post(this.url, this.formData)
	}

	deleteResume(id: number){
		return this.http.delete(this.url + '/' + id)
	}

	resetForm(form: NgForm){
		form.form.reset()
		this.formData = new Resumes()
	}
}
