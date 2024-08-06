import { Component, Input } from '@angular/core';

@Component({
  selector: 'acounter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.css'
})
export class CounterAloneComponent {

  @Input()
  public counter:number = 10;
}
