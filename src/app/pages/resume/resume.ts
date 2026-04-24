// src/app/pages/resume/resume.ts
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface SkillChipGroup {
  title: string;
  items: string[];
}

interface LinkItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class ResumeComponent {
  // chips (flattened skills like in your React version)
  skillChips: string[] = [
    'Java',
    'Angular',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'SQL',
    'Claude',
    'Copilot',
    'ChartGpt',
    'Git',
    'GitHub',
    'GitLab',
    'OOPs',
    'REST APIs',
    'Debugging',
    'Figma',
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Positive Workplace Relationships',
    'Ready to take on challenges',
  ];

  // social links (fill with your real URLs)
  links: LinkItem[] = [
    { name: '💻 GitHub', link: 'https://github.com/prudeep' },
    { name: '💼 LinkedIn', link: 'https://www.linkedin.com/in/kuppam-prudeep-b70529234/' },
  ];
}
