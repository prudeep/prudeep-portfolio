import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLinkItem {
  label: string;
  to: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  links: NavLinkItem[] = [
    { label: 'Home', to: '' },
    { label: 'About me', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Resume', to: 'resume' }, 
    { label: 'Certificates', to: 'certificates' },
    { label: 'Contact', to: 'contact'}
  ];

  isExact(link: NavLinkItem) {
    return link.to === '' || link.to === '/';
  }
}