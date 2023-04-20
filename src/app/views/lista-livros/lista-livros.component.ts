import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  campoBusca: string = ""
  livros: any;

  constructor(private service: LivroService) { }

  buscarLivros(){
    this.livros = this.service.search(this.campoBusca).subscribe(
      (returnAPI) => console.log(returnAPI)
    )
  }
}



