import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
 {
   path: 'about',
   component: AboutComponent
 },
 {
   path: 'roster',
   component: RosterComponent
 },
 {
   path: 'profiles/:id',
   component: ProfileDetailComponent
 },
 {
   path: 'admin',
   component: AdminComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
