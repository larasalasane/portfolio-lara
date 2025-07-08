import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() githubLink?: string;
  @Input() demoLink?: string;
}