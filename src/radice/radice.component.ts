import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CercaComponent } from './cerca/cerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { Archivio } from './archivio';
import { bibliotecaService } from './biblioteca.service';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-radice',
  templateUrl: './radice.component.html',
  styleUrls: ['./radice.component.css'],
  standalone: true,
  imports: [CommonModule, CercaComponent, InserimentoComponent],
})
export class RadiceComponent implements OnInit {
  view: string = 'HomePage';
  archivio: Archivio;

  cambioView(view: string) {
    this.view = view;
  }

  constructor(private as: bibliotecaService) {}

  ngOnInit() {
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        this.archivio = new Archivio(JSON.parse(x.response), this.as);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
      complete: () => {
      console.log(this.archivio);
      },
    });
  }
}
