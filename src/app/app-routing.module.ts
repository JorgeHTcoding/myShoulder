import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaPacienteComponent } from './component/carta-paciente/carta-paciente.component';
import { CrearEventoComponent } from './component/crear-evento/crear-evento.component';
import { DetalleEventoComponent } from './component/detalle-evento/detalle-evento.component';
import { EdicionPacienteComponent } from './component/edicion-paciente/edicion-paciente.component';
import { EdicionProfesionalComponent } from './component/edicion-profesional/edicion-profesional.component';
import { EstadoAnimoComponent } from './component/estado-animo/estado-animo.component';
import { FiltroComponent } from './component/filtro/filtro.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { GestionPacienteComponent } from './component/gestion-paciente/gestion-paciente.component';
import { LoginComponent } from './component/login/login.component';
import { ModalChatComponent } from './component/modal-chat/modal-chat.component';
import { ModalPresentacionComponent } from './component/modal-presentacion/modal-presentacion.component';
import { ModalRespuestaComponent } from './component/modal-respuesta/modal-respuesta.component';
import { MostrarAnfitrionComponent } from './component/mostrar-anfitrion/mostrar-anfitrion.component';
import { MostrarEventoComponent } from './component/mostrar-evento/mostrar-evento.component';
import { MostrarProfComponent } from './component/mostrar-prof/mostrar-prof.component';
import { TarjetaEventosComponent } from './component/tarjeta-eventos/tarjeta-eventos.component';
import { TarjetaEventosCancelarComponent } from './component/tarjeta-eventos-cancelar/tarjeta-eventos-cancelar.component';
import { TarjetaEventosAdministrarComponent } from './component/tarjeta-eventos-administrar/tarjeta-eventos-administrar.component';
import { TarjetaProfesionalComponent } from './component/tarjeta-profesional/tarjeta-profesional.component';


const routes: Routes = [

  {path:"", component: LoginComponent}, 
  {path:"registro", component: FormularioRegistroComponent}, 
  {path:"landing-paciente", component: MostrarProfComponent},
  {path:"landing-paciente", component: MostrarEventoComponent},
  {path:"landing-paciente", component: EstadoAnimoComponent},
  {path:"landing-paciente", component: ModalChatComponent},
  {path:"landing-familiar", component: MostrarProfComponent},
  {path:"landing-familiar", component: MostrarEventoComponent}, 
  {path:"landing-familiar", component: MostrarAnfitrionComponent},
  {path:"landing-familiar", component: EstadoAnimoComponent},
  {path:"landing-familiar", component: ModalChatComponent},
  {path:"landing-profesional", component: MostrarAnfitrionComponent},     
  {path:"edicion-perfil", component: EdicionPacienteComponent}, 
  {path:"edicion-perfil-pro", component: EdicionProfesionalComponent}, 
  {path:"busqueda-profesional", component: TarjetaProfesionalComponent}, 
  {path:"busqueda-profesional", component: FiltroComponent}, 
  {path:"busqueda-profesional", component: ModalPresentacionComponent},
  {path:"busqueda-evento", component: TarjetaEventosComponent}, 
  {path:"busqueda-evento", component: FiltroComponent}, 
  {path:"mis-eventos-paciente", component:TarjetaEventosCancelarComponent}, 
  {path:"mis-eventos-paciente", component: FiltroComponent},  
  {path:"busqueda-evento-fam", component: TarjetaEventosComponent}, 
  {path:"busqueda-evento-fam", component: FiltroComponent},  
  {path:"admin-eventos-fam-asis", component:TarjetaEventosCancelarComponent}, 
  {path:"admin-eventos-fam-asis", component: FiltroComponent},     
  {path:"admin-eventos-fam-anfi", component:  TarjetaEventosAdministrarComponent}, 
  {path:"admin-eventos-fam-anfi", component: FiltroComponent},  
  {path:"admin-eventos-pro", component:  TarjetaEventosAdministrarComponent}, 
  {path:"admin-eventos-pro", component: FiltroComponent},  
  {path:"tarjeta-evento", component: DetalleEventoComponent}, 
  {path:"creacion-evento", component: CrearEventoComponent}, 
  {path:"solicitud-pacientes", component: CartaPacienteComponent},  
  {path:"solicitud-pacientes", component: ModalRespuestaComponent },
  {path:"administracion-pacientes", component: GestionPacienteComponent}, 
  {path:"administracion-pacientes", component: ModalChatComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
