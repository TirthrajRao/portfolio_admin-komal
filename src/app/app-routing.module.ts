import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { TechnologyComponent } from './technology/technology.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ContactComponent } from './contact/contact.component';
import { AddBrochureComponent } from './add-brochure/add-brochure.component';
import { AddLandingPageComponent } from './add-landing-page/add-landing-page.component';
import { AddLogoDesignComponent } from './add-logo-design/add-logo-design.component';
const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "dashboard"
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'project-list',
		component: ProjectComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'add-project',
		component: AddProjectComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'technology-list',
		component: TechnologyComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'edit-project/:id',
		component: AddProjectComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'catagory-list',
		component: CatagoryComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'contact-request',
		component: ContactComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'add-brochure',
		component: AddBrochureComponent
	},
	{
		path: 'add-landing-page',
		component: AddLandingPageComponent
	},
	{
		path:'add-logo-design',
		component:AddLogoDesignComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	providers: [AuthGuard]
})
export class AppRoutingModule { }
