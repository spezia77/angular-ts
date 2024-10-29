import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Plataforma } from '../models/plataforma';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  constructor() { }

  obterTodas(): Observable<Plataforma[]>{
    let plataformas = [
      {nome: "Xbox"},
      {nome: "Mobile"},
      {nome: "PlayStation"},
      {nome: "PC"},
      {nome: "Nintendo"},
    ]
    plataformas.sort((a, b) => a.nome.localeCompare(b.nome)) // deixar em ordem alfabética (localeCompare)

    return of(plataformas)
  }
}
