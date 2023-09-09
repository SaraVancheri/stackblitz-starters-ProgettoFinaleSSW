import { bibliotecaService } from './biblioteca.service';
import { Libro } from './libro';

export class Archivio {
  inventario: Array<Libro> = [];

  constructor(archivio: Libro[], private as: bibliotecaService) {
    this.inventario = archivio;
  }

  cercaLibro(stringa: string) {
    return this.inventario.filter((libro) =>
      (libro.titolo + ' ' + libro.autore)
        .toLowerCase()
        .includes(stringa.toLowerCase())
    );
  }

  inserisciLibro(libro: Libro) {
    this.inventario.push(libro);
    this.aggiornaBiblioteca();
  }

  rimuoviLibro(posizione: string) {
    this.inventario = this.inventario.filter(
      (libro) => libro.posizione !== posizione
    );
    this.aggiornaBiblioteca();
  }

  restituisciLibro(libro: Libro) {
    this.inventario.filter((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = '';
      }
    });
    this.aggiornaBiblioteca();
  }

  prestitoLibro(libro: Libro, nomePrestito: string) {
    this.inventario.filter((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = nomePrestito;
      }
    });
    this.aggiornaBiblioteca();
  }

  aggiornaBiblioteca() {
    this.as.setData(JSON.stringify(this.inventario)).subscribe({
      next: () => console.log('Archivio aggiornato!'),
      error: (errore) =>
        console.log('Observer got an error: ' + JSON.stringify(errore)),
    });
  }
}
