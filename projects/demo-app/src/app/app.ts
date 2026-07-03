import { Component } from '@angular/core';
import { Button } from 'ui-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button],
  templateUrl: './app.html',
})
export class App {}