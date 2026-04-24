// src/app/pages/skills/skills.ts
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgFor } from '@angular/common';

interface SkillIcon {
  name: string;
  logo: string;
}

interface SkillColumn {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent implements AfterViewInit {
  SKILLS: SkillIcon[] = [
    {
      name: 'Java',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'HTML',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Angular',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
    },
    {
      name: 'SQL',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'GitLab',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    },
    {
      name: 'TypeScript',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Bootstrap',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Figma',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      name: 'REST API',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    },
    {
      name: 'OOPs',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'GitHub',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'ChatGPT',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    },
    {
      name: 'Copilot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'Claude',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg',
    },
  ];

  ROWS: SkillColumn[][] = [
    [
      {
        title: 'Programming Languages',
        items: ['Java', 'TypeScript'],

      },
      {
        title: 'Web Technologies',
        items: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      },
      {
        title: 'Databases & Tools',
        items: ['SQL', 'GitHub', 'GitLab', 'Git'],
      },
    ],
    [
      {
        title: 'AI Tools',
        items: ['Claude', 'Copilot', 'Chartgpt'],
      },
      {
        title: 'Core Concepts',
        items: [
          'Object-Oriented Programming (OOP)',
          'Data Structures & Algorithms (Basics)',
          'RESTful API Design & Integration',
          'Software Debugging & Code Optimization',
          'SDLC & Agile Development Basics',
        ],
      },
      {
        title: 'Soft Skills',
        items: [
          'Problem Solving',
          'Team Collaboration',
          'Communication',
          'Positive Workplace Relationships',
          'Ready to take on challenges'
        ],
      },
    ],
  ];

  @ViewChild('stage', { static: false })
  stageRef?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const stage = this.stageRef?.nativeElement;
    if (!stage) return;

    const circles = Array.from(
      stage.querySelectorAll<HTMLElement>('.skill-circle'),
    );
    const rect = stage.getBoundingClientRect();
    const placed: { x: number; y: number; size: number }[] = [];

    const isOverlapping = (x: number, y: number, size: number): boolean =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth || 80;
      let x: number;
      let y: number;
      let tries = 0;

      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;

      circle.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${dx}px, ${dy}px)` },
        ],
        {
          duration: 5000 + Math.random() * 2000,
          direction: 'alternate',
          iterations: Infinity,
          easing: 'ease-in-out',
        },
      );
    });
  }
}
