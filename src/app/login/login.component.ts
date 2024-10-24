import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    PasswordModule,
    PanelModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = "";
  senha : string = "";

  constructor
  ( // Necessario para poder apresentar mensagem de feedback para o usuario
    private messageService: MessageService,
    // Necessario para poder redirecionar para outra rota
    private router: Router,
    ) {}


  enviar() {
    if (this.login == "admin" && this.senha == "batatinha") {
      this.router.navigate(["/home"])
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Login e/ou senha inválidos' });
    }
    
  }
  
  redirecionarCadastrar(){
    this.router.navigate(["/cadastrar"])
  }
}