import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() imgLink = '';
  @Input() name = '';
}
