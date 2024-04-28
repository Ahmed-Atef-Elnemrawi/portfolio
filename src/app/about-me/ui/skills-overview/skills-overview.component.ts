import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'skills-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full flex flex-col px-4 space-y-1">
      <h1 class="text-2xl text-text-400 font-bold font-headerFont capitalize">
        skills
      </h1>

      <ul class="md:text-sm md:font-bodyFont max-w-prose md:font-semibold">
        <li class="flex space-x-2 ">
          <p class="text-text-300 capitalize font-bold">languages: </p>
          <p class="text-text-200 font-bodyFont font-semibold">{{programmingLangs.toString()}}</p>
        </li>
        <li class="flex space-x-2 ">
          <p class="text-text-300 capitalize font-bold">backend: </p>
          <p class="text-text-200 ">{{backEndSkills.toString()}}</p>
        </li>
        <li class="flex space-x-2 ">
          <p class="text-text-300 capitalize font-bold">front-end: </p>
          <p class="text-text-200">{{fontEndSkills.toString()}}</p>
        </li>

      </ul>

    </div>
  `,
  styles: ``,
})
export class SkillsOverviewComponent {
  backEndSkills = [
    'SQL Server',
    'Entity Framework',
    'LINQ',
    'ASP.NET Core Web APIs',
  ].sort().join(','+' ');
  fontEndSkills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind Css',
    'Angular',
    'RXJS',
    'NGRX',
  ];
  programmingLangs = ['C#', 'TypeScript'].sort().join(','+' ');
  otherTechnicalSkills = [
    'OOP',
    'Data Structure',
    'Git/GitHub',
    'Solid Principles',
    'Clean Architecture',
  ].sort().join(','+' ');
}
