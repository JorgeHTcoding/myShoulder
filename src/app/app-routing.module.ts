import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEventosFamAnfiComponent } from './pages/admin-eventos-fam-anfi/admin-eventos-fam-anfi.component';
import { AdminEventosFamAsisComponent } from './pages/admin-eventos-fam-asis/admin-eventos-fam-asis.component';
import { AdministracionPacientesComponent } from './pages/administracion-pacientes/administracion-pacientes.component';
import { AdministrarEventosProComponent } from './pages/administrar-eventos-pro/administrar-eventos-pro.component';
import { BusquedaEventoComponent } from './pages/busqueda-evento/busqueda-evento.component';
import { BusquedaEventoFamComponent } from './pages/busqueda-evento-fam/busqueda-evento-fam.component';
import { BusquedaProfesionalComponent } from './pages/busqueda-profesional/busqueda-profesional.component';
import { CreacionEventoComponent } from './pages/creacion-evento/creacion-evento.component';
import { EdicionPerfilComponent } from './pages/edicion-perfil/edicion-perfil.component';
import { EdicionPerfilProComponent } from './pages/edicion-perfil-pro/edicion-perfil-pro.component';
import { LandingFamiliarComponent } from './pages/landing-familiar/landing-familiar.component';
import { LandingPacienteComponent } from './pages/landing-paciente/landing-paciente.component';
import { LandingProfesionalComponent } from './pages/landing-profesional/landing-profesional.component';
import { Landing1Component } from './pages/landing1/landing1.component';
import { MisEventosPacienteComponent } from './pages/mis-eventos-paciente/mis-eventos-paciente.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SolicitudPacientesComponent } from './pages/solicitud-pacientes/solicitud-pacientes.component';
import { TarjetaEventoComponent } from './pages/tarjeta-evento/tarjeta-evento.component';


const routes: Routes = [

  {path:"", component: Landing1Component}, 
  {path:"registro", component: RegistroComponent}, 
  {path:"quienes-somos", component: QuienesSomosComponent},
  {path:"landing-paciente", component: LandingPacienteComponent},
  {path:"landing-familiar", component: LandingFamiliarComponent},
  {path:"landing-profesional", component: LandingProfesionalComponent},
  {path:"admin-eventos-fam-anfi", component:AdminEventosFamAnfiComponent},
  {path:"admin-eventos-fam-asis", component: AdminEventosFamAsisComponent}, 
  {path:"administracion-pacientes", component: AdministracionPacientesComponent},
  {path:"administrar-eventos-pro", component: AdministrarEventosProComponent},
  {path:"busqueda-evento", component: BusquedaEventoComponent},
  {path:"busqueda-evento-fam", component: BusquedaEventoFamComponent}, 
  {path:"busqueda-profesional", component: BusquedaProfesionalComponent},  
  {path:"creacion-evento", component: CreacionEventoComponent}, 
  {path:"edicion-perfil", component: EdicionPerfilComponent}, 
  {path:"edicion-perfil-pro", component: EdicionPerfilProComponent}, 
  {path:"mis-eventos-paciente", component: MisEventosPacienteComponent}, 
  {path:"solicitud-pacientes", component: SolicitudPacientesComponent}, 
  {path:"tarjeta-evento", component: TarjetaEventoComponent}, 
  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }