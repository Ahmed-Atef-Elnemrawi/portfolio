import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { projects } from '../../models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="w-dvw h-[84dvh] md:h-[calc(80dvh+25px)] relative overflow-y-scroll py-32 px-16"
    >
      <ul
        class="w-full sm:w-[85%] max-sm:space-y-16 sm:gap-6 h-fit flex flex-wrap mx-auto md:gap-16"
      >
        @for (item of projects; track $index) {
        <li
          class="group max-md:w-full md:w-[45%] h-fit z-0  rounded-sm relative shadow-2xl shadow-background-800"
        >
          <img
            class="block rounded-sm"
            [src]="item.images_src[0]"
            alt=""
          />
          <a
            [routerLink]="['/my-projects', item.name]"
            class="w-full h-full flex flex-col  place-content-center  space-y-10 place-items-center absolute top-0 bg-accent-950 opacity-0 rounded-sm  origin-bottom-right group-hover:opacity-75 ease-linear duration-300 "
          >
            <p class="text-xl text-text-200 font-bold font-bodyFont">
              {{ item.name }}
            </p>

            <div
              class="flex flex-wrap gap-4 place-content-center place-items-center px-6 place-self-end"
            >
              @for (item of item.code_technologies; track $index) {
              <p
                class="text-[12px] font-bodyFont font-bold py-1 px-2.5 bg-background-700 rounded-sm shadow-sm"
              >
                {{ item }}
              </p>
              }
            </div>
          </a>
          <a
            [href]="item.github"
            target="_blank"
            class="block py-4 px-6 absolute top-0 right-0 z-50 bg-background-700 opacity-0 group-hover:opacity-95 rounded-sm text-tex-200 text-base tracking-wide font-bodyFont font-semibold"
            >{{ 'github' }}</a
          >
        </li>
        }
      </ul>
    </div>
  `,
  styles: `

  `,
})
export class ProjectListComponent implements AfterViewInit {
  projects = projects;
  ngAfterViewInit(): void {}
}
