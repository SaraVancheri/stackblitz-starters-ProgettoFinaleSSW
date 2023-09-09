import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';
import { bibliotecaService } from '../../biblioteca.service';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class PrestitoComponent implements OnInit {
  @Input() libroTrovato: Array<Libro>;
  @Input() archivio: Archivio;
  @Output() aggiornaView = new EventEmitter<string>();
  view: string = 'viewRisultati';

  constructor() {}

  ngOnInit() {}

  restituzione() {
    this.archivio.restituisciLibro(this.libroTrovato[0]);
    this.aggiornaView.emit('HomePage');
  }

  prestito() {
    let stringaInput = (document.getElementById('prestito') as HTMLInputElement)
      .value;
    this.archivio.prestitoLibro(this.libroTrovato[0], stringaInput);
    this.aggiornaView.emit('HomePage');
  }
}
