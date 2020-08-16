import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../models/noticia';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  noticia = {} as Noticia;
  noticias: Noticia[];

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
  }

  saveNoticia(form: NgForm) {
    this.noticiaService.saveNoticia(this.noticia).subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () => {
      console.log('request completo');
      console.log(form.value);
      this.cleanForm(form);
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.noticia = {} as Noticia;
  }
}
