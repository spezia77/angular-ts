import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



interface Categoria {
  id: number,
  nome: String
}


@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule, FormsModule],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent {
  nome: string = "";
  categorias!:Categoria[];
  modalApresentada: boolean = false;

  ngOnInit(){
    this.categorias = [
      {
        id: 1,
        nome: "RPG"
      }
    ]
  }
  
  abrirModal(){
    this.modalApresentada = true;
  }


}
