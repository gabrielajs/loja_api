import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }

  notificacao(mensagem: string): void{
    this.snackBar.open(mensagem, 'OK', {
      duration: 3000, // Duração em milissegundos
      horizontalPosition: 'right', // Posição horizontal
      verticalPosition: 'top' // Posição vertical
    });
  }
}
