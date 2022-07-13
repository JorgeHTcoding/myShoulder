import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Eventos } from 'src/app/models/eventos';




@Component({
  selector: 'app-mis-eventos-paciente',
  templateUrl: './mis-eventos-paciente.component.html',
  styleUrls: ['./mis-eventos-paciente.component.scss']
})
export class MisEventosPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
