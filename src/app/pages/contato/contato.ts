import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificacaoService } from '../../notificacao.service';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato{
  formContato: any;

  constructor(private fb: FormBuilder, private notificacaoService: NotificacaoService) {
    this.formContato = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, Validators.email]],
      assunto: ['',[Validators.required]],
      mensagem: ['',[Validators.required, Validators.minLength(10)]]
    });
  }
  
  enviarForm(){
    if (this.formContato.valid) {
      this.notificacaoService.notificacao('Formulário enviado com sucesso!');

      console.log('Formulário enviado com sucesso!', this.formContato.value);

      this.formContato.reset(); // Reseta o formulário após o envio
    } else {
      this.notificacaoService.notificacao('Formulário inválido. Por favor, corrija os erros.');
    }
  }

}
