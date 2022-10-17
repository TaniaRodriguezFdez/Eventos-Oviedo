import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './pages/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { MatCardModule} from '@angular/material/card';
import { FormComponent } from './components/form/form.component';
import { PopupEventComponent } from './components/popup_event/popup_event.component';
import { PopupViewComponent } from './pages/popup_view/popup-view.component';
import { PopupCreatedComponent } from './pages/popup-created/popup-created.component';
import { PopupEventCreatedComponent } from './components/popup-event-created/popup-event-created.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormLoginViewComponent } from './pages/form-login-view/form-login-view.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './pages/detail/detail.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateComponent,
    CardComponent,
    FormComponent,
    PopupEventComponent,
    PopupViewComponent,
    PopupCreatedComponent,
    PopupEventCreatedComponent,
    WelcomeComponent,
    FormLoginViewComponent,
    FormLoginComponent,
    LoginComponent,
    DetailComponent,
    CardDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
