import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes:Routes = [
{path: 'login',component: LoginComponent},
{path: 'resume',component:ResumeComponent},
{path: 'projects',component:ProjectsComponent},
{path: 'home',component:HomeComponent},
{path: '',redirectTo:'home',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
