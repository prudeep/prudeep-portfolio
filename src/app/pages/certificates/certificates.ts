import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

type CertTab = 'tech' | 'other';

interface Certificate {
  title: string;
  org: string;
  date?: string;
  img: string;   // image path under src/assets
  link: string;  // full-size view (usually same as img)
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {
  activeTab: CertTab = 'tech';
  selectedCert: Certificate | null = null;

  tabs: { id: CertTab; label: string }[] = [
    { id: 'tech', label: 'Tech' },
    { id: 'other', label: 'Others' },
  ];

  // 🔹 update image paths to match actual files in src/assets/certs/
  certificates: Record<CertTab, Certificate[]> = {
    tech: [
      {
        title: 'Programming in Java',
        org: 'NPTEL',
        date: '2023',
        img: 'assets/java-nptel.jpg',
        link: 'assets/java-nptel.jpg',
      },
      {
        title: 'Programming in Java',
        org: 'Yhills',
        date: '2023',
        img: 'assets/java-yhills.jpg',
        link: 'assets/java-yhills.jpg',
      },
      {
        title: 'Web Development',
        org: 'CodTech IT Solutions',
        date: '2024',
        img: 'assets/web-codtech.jpg',
        link: 'assets/web-codtech.jpg',
      },
      {
        title: 'Bootcamp on C Programming',
        org: 'Codegnan',
        date: '2022',
        img: 'assets/c-codegnan.jpg',
        link: 'assets/c-codegnan.jpg',
      },
    ],
    other: [
      {
        title: '2nd International Conference (IDASCN-2024)',
        org: 'Conference Participation',
        date: '2024',
        img: 'assets/idascn-2024.jpg',
        link: 'assets/idascn-2024.jpg',
      },
    ],
  };

  setTab(tab: CertTab) {
    this.activeTab = tab;
    this.selectedCert = null;
  }

  openCert(cert: Certificate) {
    this.selectedCert = cert;
  }

  closeModal() {
    this.selectedCert = null;
  }

  trackByTitle(_index: number, cert: Certificate) {
    return cert.title;
  }
}
