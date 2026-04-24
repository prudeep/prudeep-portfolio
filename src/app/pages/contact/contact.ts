import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

interface QuickLink {
  img: string;
  title: string;
  link: string;
  isExternal: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {

  quickLinks: QuickLink[] = [
    { img: 'assets/github.png', title: 'GitHub', link: 'https://github.com/prudeep',isExternal: true },
    { img: 'assets/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/kuppam-prudeep-b70529234/', isExternal: true },
    { img: 'assets/gmail.png', title: 'Email', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=kprudeep@gmail.com',  isExternal: false, },
    { img: 'assets/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/917093596974',isExternal: true },
  ];
}
