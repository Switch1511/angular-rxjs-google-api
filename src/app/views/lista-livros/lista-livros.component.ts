import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy{

  listaLivros: [];
  campoBusca: string = ""
  subscription: Subscription;

  constructor(private service: LivroService) { }

  buscarLivros(){
    this.subscription = this.service.search(this.campoBusca).subscribe({
      next: returnAPI => console.log(returnAPI),
      error: error => console.log(error)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



