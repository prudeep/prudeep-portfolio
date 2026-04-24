import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface QuickLink {
  img: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  // your photo in src/assets
  photo = 'assets/prudeep-photo.png';

  professions: string[] = [
    'Software Developer',
    'Java Developer',
    'Angular Developer',
    'Web Development',
  ];

  quickLinks: QuickLink[] = [
    { img: 'assets/github.png',   title: 'GitHub',   link: 'https://github.com/prudeep' },
    { img: 'assets/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/kuppam-prudeep-b70529234/' },
    { img: 'assets/gmail.png',    title: 'Email',    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=kprudeep@gmail.com' },
    { img: 'assets/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/917093596974' },
  ];

  infoCards = [
    { label: '📍 Location', value: 'Tirupati, Andhra Pradesh, India' },
    {
      label: '💼 Expertise',
      value: 'Java & Angular, Web Development, Problem Solving',
    },
  ];
}