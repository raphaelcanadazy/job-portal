import { Component } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, DashboardComponent, ForgotPasswordComponent, VarifyEmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-portal';
}

