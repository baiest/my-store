import { OnExit } from './../../../guards/exit.guard';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnExit {

  constructor() { }
  ngOnInit(): void {
  }
  
  onExit() {
    const rta = confirm('Logica desde comp, seguro quieres salir?')
    return rta
  }
}
