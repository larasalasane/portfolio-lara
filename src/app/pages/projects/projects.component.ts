import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 projects = [
  {
    title: 'Hoteles del Sur (Angular)',
    description: 'Frontend para gestión de hoteles desarrollado en Angular. Incluye rutas, autenticación, y CRUD de reservas.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap'],
    github: 'https://github.com/larasalasane/Hoteles-del-Sur-Angular-',
    demo: '' // Si tenés un deploy, se agrega aquí
  },
 {
  title: 'Hoteles del Sur (Backend Java)',
  description: 'API REST desarrollada en Java puro para la app de hoteles. Incluye gestión de reservas, usuarios y habitaciones.',
  technologies: ['Java', 'REST', 'POO'],
  github: 'https://github.com/larasalasane/hoteles-del-sur',
  demo: ''
},
  {
    title: 'Sistema bancario en C',
    description: 'Aplicación de consola que simula operaciones bancarias: altas, bajas y transferencias.',
    technologies: ['C', 'Estructuras', 'Archivos'],
    github: 'https://github.com/larasalasane/BancoBicicletaFacil', 
    demo: ''
  }
];
}