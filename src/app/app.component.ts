import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cloudflare-test';
  tag = 'The Big brown fox jumped over the lazy dog.';
  theLists = [
    { id: '5001', type: 'None' },
    { id: '5002', type: 'Glazed', mad: true },
    { id: '5005', type: 'Sugar' },
    { id: '5007', type: 'Powdered Sugar' },
    { id: '5006', type: 'Chocolate with Sprinkles', mad: true },
    { id: '5003', type: 'Chocolate' },
    { id: '5004', type: 'Maple' },
  ];
}
