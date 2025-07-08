import { Component } from '@angular/core';
  import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lara Salas Ané';


ngOnInit(): void {
  AOS.init({ duration: 1000 });
}

}
