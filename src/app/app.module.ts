import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TarjetaEventosComponent } from './component/tarjeta-eventos/tarjeta-eventos.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TarjetaProfesionalComponent } from './component/tarjeta-profesional/tarjeta-profesional.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { CrearEventoComponent } from './component/crear-evento/crear-evento.component';
import { EdicionPacienteComponent } from './component/edicion-paciente/edicion-paciente.component';
import { EdicionProfesionalComponent } from './component/edicion-profesional/edicion-profesional.component';
import { MostrarEventoComponent } from './component/mostrar-evento/mostrar-evento.component';
import { MostrarProfComponent } from './component/mostrar-prof/mostrar-prof.component';
import { MostrarAnfitrionComponent } from './component/mostrar-anfitrion/mostrar-anfitrion.component';
import { EstadoAnimoComponent } from './component/estado-animo/estado-animo.component';
import { CartaPacienteComponent } from './component/carta-paciente/carta-paciente.component';
import { GestionPacienteComponent } from './component/gestion-paciente/gestion-paciente.component';
import { ModalChatComponent } from './component/modal-chat/modal-chat.component';
import { DetalleEventoComponent } from './component/detalle-evento/detalle-evento.component';
import { FiltroComponent } from './component/filtro/filtro.component';
import { ModalRespuestaComponent } from './component/modal-respuesta/modal-respuesta.component';
import { ModalPresentacionComponent } from './component/modal-presentacion/modal-presentacion.component';
import { Landing1Component } from './pages/landing1/landing1.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LandingPacienteComponent } from './pages/landing-paciente/landing-paciente.component';
import { LandingFamiliarComponent } from './pages/landing-familiar/landing-familiar.component';
import { LandingProfesionalComponent } from './pages/landing-profesional/landing-profesional.component';
import { BusquedaEventoComponent } from './pages/busqueda-evento/busqueda-evento.component';
import { MisEventosPacienteComponent } from './pages/mis-eventos-paciente/mis-eventos-paciente.component';
import { BusquedaEventoFamComponent } from './pages/busqueda-evento-fam/busqueda-evento-fam.component';
import { AdminEventosFamAsisComponent } from './pages/admin-eventos-fam-asis/admin-eventos-fam-asis.component';
import { AdminEventosFamAnfiComponent } from './pages/admin-eventos-fam-anfi/admin-eventos-fam-anfi.component';
import { EdicionPerfilComponent } from './pages/edicion-perfil/edicion-perfil.component';
import { BusquedaProfesionalComponent } from './pages/busqueda-profesional/busqueda-profesional.component';
import { TarjetaEventoComponent } from './pages/tarjeta-evento/tarjeta-evento.component';
import { CreacionEventoComponent } from './pages/creacion-evento/creacion-evento.component';
import { EdicionPerfilProComponent } from './pages/edicion-perfil-pro/edicion-perfil-pro.component';
import { AdministrarEventosProComponent } from './pages/administrar-eventos-pro/administrar-eventos-pro.component';
import { SolicitudPacientesComponent } from './pages/solicitud-pacientes/solicitud-pacientes.component';
import { AdministracionPacientesComponent } from './pages/administracion-pacientes/administracion-pacientes.component';
import { TarjetaEventosCancelarComponent } from './component/tarjeta-eventos-cancelar/tarjeta-eventos-cancelar.component';
import { TarjetaEventosAdministrarComponent } from './component/tarjeta-eventos-administrar/tarjeta-eventos-administrar.component';
import { FormsModule } from '@angular/forms';
import { HeaderPacComponent } from './component/header-pac/header-pac.component';
import { HeaderProComponent } from './component/header-pro/header-pro.component';
import { FooterAnimationComponent } from './component/footer-animation/footer-animation.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TarjetaEventosComponent,
    HeaderComponent,
    FooterComponent,
    TarjetaProfesionalComponent,
    FormularioRegistroComponent,
    CrearEventoComponent,
    EdicionPacienteComponent,
    EdicionProfesionalComponent,
    MostrarEventoComponent,
    MostrarProfComponent,
    MostrarAnfitrionComponent,
    EstadoAnimoComponent,
    CartaPacienteComponent,
    GestionPacienteComponent,
    ModalChatComponent,
    DetalleEventoComponent,
    FiltroComponent,
    ModalRespuestaComponent,
    ModalPresentacionComponent,
    Landing1Component,
    QuienesSomosComponent,
    RegistroComponent,
    LandingPacienteComponent,
    LandingFamiliarComponent,
    LandingProfesionalComponent,
    BusquedaEventoComponent,
    MisEventosPacienteComponent,
    BusquedaEventoFamComponent,
    AdminEventosFamAsisComponent,
    AdminEventosFamAnfiComponent,
    EdicionPerfilComponent,
    BusquedaProfesionalComponent,
    TarjetaEventoComponent,
    CreacionEventoComponent,
    EdicionPerfilProComponent,
    AdministrarEventosProComponent,
    SolicitudPacientesComponent,
    AdministracionPacientesComponent,
    TarjetaEventosCancelarComponent,
    TarjetaEventosAdministrarComponent,
    HeaderPacComponent,
    HeaderProComponent,
    FooterAnimationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
