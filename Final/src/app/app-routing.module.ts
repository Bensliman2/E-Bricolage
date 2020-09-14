import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'userlogin', loadChildren: './userlogin/userlogin.module#UserloginPageModule' },
  { path: 'speclogin', loadChildren: './speclogin/speclogin.module#SpecloginPageModule' },
  { path: 'registeruser', loadChildren: './registeruser/registeruser.module#RegisteruserPageModule' },
  { path: 'registerspec', loadChildren: './registerspec/registerspec.module#RegisterspecPageModule' },
  { path: 'userprofil', loadChildren: './userprofil/userprofil.module#UserprofilPageModule' },
  { path: 'mycommands', loadChildren: './mycommands/mycommands.module#MycommandsPageModule' },
  { path: 'useredit', loadChildren: './useredit/useredit.module#UsereditPageModule' },
  { path: 'commander/:myid', loadChildren: './commander/commander.module#CommanderPageModule' },
  { path: 'specialists', loadChildren: './specialists/specialists.module#SpecialistsPageModule' },
  { path: 'specialistprofile', loadChildren: './specialistprofile/specialistprofile.module#SpecialistprofilePageModule' },
  { path: 'homespec', loadChildren: './homespec/homespec.module#HomespecPageModule' },
  { path: 'specialistprofial2', loadChildren: './specialistprofial2/specialistprofial2.module#Specialistprofial2PageModule' },
  { path: 'specialistedit', loadChildren: './specialistedit/specialistedit.module#SpecialisteditPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
