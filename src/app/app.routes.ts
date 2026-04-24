import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.AboutComponent),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills').then((m) => m.SkillsComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./pages/resume/resume').then((m) => m.ResumeComponent),
  },
  {
    path: 'certificates',
    loadComponent: () =>
      import('./pages/certificates/certificates').then((m) => m.CertificatesComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.ContactComponent),
  }, 
  {
    path: '**',
    redirectTo: '',
  },
];