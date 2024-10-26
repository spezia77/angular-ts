import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { Router } from '@angular/router';

interface JogoLista{
  id: number,
  foto: string,
  nome: string,
  preco: number,
  categoria: string,
}


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

  constructor(private router: Router){}

  ngOnInit(){
    this.jogos = [
      {
        id: 1,
        nome: "The Last of US 2",
        foto: "https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png",
        preco: 250.00,
        categoria: "Survivor"
      }
    ]
  }

  acessarCadastro(){
    this.router.navigate(["/jogos/cadastro"])
  }
}
