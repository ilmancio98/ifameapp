import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
 {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'vista-cliente',
    loadChildren: () => import('./vista-cliente/vista-cliente.module').then( m => m.VistaClientePageModule)
  },
  {
    path: 'vista-cliente',
    loadChildren: () => import('./vista-cliente/vista-cliente.module').then( m => m.VistaClientePageModule)
  },
  {
    path: 'scelta-utente',
    loadChildren: () => import('./scelta-utente/scelta-utente.module').then( m => m.SceltaUtentePageModule)
  },
  {
    path: 'registra-gestore',
    loadChildren: () => import('./registra-gestore/registra-gestore.module').then( m => m.RegistraGestorePageModule)
  },
  {
    path: 'registra-cliente',
    loadChildren: () => import('./registra-cliente/registra-cliente.module').then( m => m.RegistraClientePageModule)
  },
  {
    path: 'vista-gestore',
    loadChildren: () => import('./vista-gestore/vista-gestore.module').then( m => m.VistaGestorePageModule)
  },
  {
    path: 'vista-gestore',
    loadChildren: () => import('./vista-gestore/vista-gestore.module').then( m => m.VistaGestorePageModule)
  },
  // {
  //   path: 'service',
  //   loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
