import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../models/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticia = {} as Noticia;
  noticias: Noticia[];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(){
    this.getNoticias();
  }

  getNoticias() {
    this.noticiaService.getNoticias().subscribe((noticias: Noticia[]) => {
      this.noticias = noticias;
    });
  }
}
