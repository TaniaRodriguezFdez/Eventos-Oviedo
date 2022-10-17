import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { PopupViewComponent }from './pages/popup_view/popup-view.component';
import {FormComponent }from './components/form/form.component';
import { PopupCreatedComponent } from './pages/popup-created/popup-created.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormLoginViewComponent } from './pages/form-login-view/form-login-view.component';
import { AppComponent } from './app.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent},
  { path: 'popup_view', component: PopupViewComponent},
  { path: 'form', component: FormComponent},
  { path: 'popup-created', component: PopupCreatedComponent},
  { path: 'form-login-view', component: FormLoginViewComponent},
  { path: 'detail', component: CardDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
