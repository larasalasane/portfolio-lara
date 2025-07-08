import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => in', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('in => void', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class SkillsComponent {
   animateSkills = true;
 skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'C', icon: 'fas fa-c' }, // Ícono personalizado; Font Awesome no tiene uno exacto para C
      { name: 'REST APIs', icon: 'fas fa-plug' },
      { name: 'Express', icon: 'fas fa-server' }
    ]
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'MongoDB', icon: 'fas fa-leaf' }, // Custom, no oficial
      { name: 'MySQL', icon: 'fas fa-database' }
    ]
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Postman', icon: 'fas fa-envelope-open-text' }, // Custom
      { name: 'VS Code', icon: 'fas fa-code' }
    ]
  }
];
}