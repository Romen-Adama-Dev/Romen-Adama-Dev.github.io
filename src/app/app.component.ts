import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProyectosComponent, InicioComponent, AboutMeComponent, HabilidadesComponent, ContactoComponent]
})
export class AppComponent {
  headerVisible = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.headerVisible = window.pageYOffset < 100; // Ocultar cuando el desplazamiento supera los 100px
  }
}
