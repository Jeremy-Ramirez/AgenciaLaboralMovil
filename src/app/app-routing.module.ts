import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'register-empresa',
    loadChildren: () => import('./register-empresa/register-empresa.module').then( m => m.RegisterEmpresaPageModule)
  },
  {
    path: 'login-empresa',
    loadChildren: () => import('./login-empresa/login-empresa.module').then( m => m.LoginEmpresaPageModule)
  },
  {
    path: 'sesion-empresa',
    loadChildren: () => import('./sesion-empresa/sesion-empresa.module').then( m => m.SesionEmpresaPageModule)
  },
  {
    path: 'perfil-empresa',
    loadChildren: () => import('./perfil-empresa/perfil-empresa.module').then( m => m.PerfilEmpresaPageModule)
  },
  {
    path: 'informacion-empresa',
    loadChildren: () => import('./informacion-empresa/informacion-empresa.module').then( m => m.InformacionEmpresaPageModule)
  },
  {
    path: 'contrasenia-empresa',
    loadChildren: () => import('./contrasenia-empresa/contrasenia-empresa.module').then( m => m.ContraseniaEmpresaPageModule)
  },
  {
    path: 'oferta-empleo',
    loadChildren: () => import('./oferta-empleo/oferta-empleo.module').then( m => m.OfertaEmpleoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
