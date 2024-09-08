import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que es un componente independiente
  imports: [RouterOutlet, HomeComponent, ProjectsComponent, ContactComponent], // Se importa RouterOutlet para gestionar las rutas
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css' // Usa los estilos correspondientes
})
export class AppComponent {
  title = 'portfolio-angular';
}
