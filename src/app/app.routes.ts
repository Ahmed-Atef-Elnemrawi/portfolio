import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectListComponent } from './project/feature/project-list/project-list.component';
import { ProjectDetailsComponent } from './project/feature/project-details/project-details.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingPageComponent,
    title:'portfolio home'
  },
  {
    path: 'about',
    component: AboutMeComponent,
    title:'about me'
  },
  {
    path: 'projects',
    children: [
      {
        path:'',
        component:ProjectListComponent,
        title:'projects'
      },
      {
        path: ':name',
        component: ProjectDetailsComponent,
      },
    ],
  },{
    path:'contact',
    component:ContactComponent
  }
];
