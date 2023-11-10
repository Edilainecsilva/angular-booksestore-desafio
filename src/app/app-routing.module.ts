import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { FormComponent } from './pages/form/form.component';
import { AboutComponent } from './pages/about/about.component';

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
		path: 'form',
		component:FormComponent
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
