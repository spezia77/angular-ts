import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { Router } from '@angular/router';
import { JogoService } from '../../services/jogo.service';
import { JogoLista } from '../../models/jogo-lista';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [
    NavbarComponent,
    TableModule,
    ButtonModule,
    ImageModule,
  ],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.css'
})
export class ListaJogosComponent {
  jogos!: JogoLista[];

  constructor(private router: Router, private jogoService: JogoService) { }

  ngOnInit() {
    this.jogoService.obterParaLista().subscribe({
      next: jogos => this.jogos = jogos,
      error: erro => {
        console.error(erro);
        alert("Não foi possível ca1rregar a lista de jogos")
      }
    })
  }

  acessarCadastro() {
    this.router.navigate(["/jogos/cadastro"])
  }
}
