import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bibliotecaService } from '../biblioteca.service';
import { Archivio } from '../archivio';
import { PrestitoComponent } from './prestito/prestito.component';
import { Libro } from '../libro';
import { RimozioneComponent } from './rimozione/rimozione.component';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css'],
  imports: [CommonModule, PrestitoComponent, RimozioneComponent],
  standalone: true,
})
export class CercaComponent implements OnInit {
  @Output() aggiornaView = new EventEmitter<string>();
  @Input() archivio: Archivio;
  view: string = 'viewCerca';
  output: number = 0;
  risultatoRicerca: Array<Libro> = [];

  constructor() {}

  ngOnInit() {}

  cambioView(view: string) {
    this.view = view;
    this.aggiornaView.emit(this.view);
  }

  cerca() {
    let stringaInput = (document.getElementById('stringa') as HTMLInputElement)
      .value;
    let trovati = this.archivio.cercaLibro(stringaInput);
    this.output = stringaInput.length > 0 ? trovati.length : 0;
    //se numero di libri corrispondenti è pari a 1 allora viene visualizzata la scheda del libro
    if (this.output === 1) {
      this.view = 'viewRisultato';
      this.risultatoRicerca.push(trovati[0]);
    }
  }
}
