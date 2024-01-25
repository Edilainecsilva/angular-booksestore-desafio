import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumesComponent } from './pages/resumes/resumes.component';

const routes: Routes = [
	{
		path: '',
		component:HomeComponent
	},
	{
		path: 'product/:id',
		component:ProductComponent
	},
	{
		path: 'resumes',
		component:ResumesComponent
	},
	{
		path: 'about',
		component:AboutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
