import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink, TitleStrategy } from '@angular/router';
import { project, projects } from '../../models';
import { BehaviorSubject, map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="w-dvw h-[84dvh] md:h-[calc(80dvh+25px)] mx-auto overflow-y-scroll py-20 px-6 md:px-32 relative">

    <button routerLink="/my-projects"  class="py-1.5 px-4 bg-background-700 text-text-200 rounded-sm absolute top-10 left-4">Back</button>

      <div
        class="w-full md:w-[75%] h-fit relative flex flex-col place-items-center mx-auto space-y-14 "
      >
        <h2
          class="max-md:text-3xl md:text-3xl text-text-300 font-headerFont font-bold"
        >
          {{ project.name }}
        </h2>
        <section class="w-full h-fit flex flex-col">
          <h6
            class="max-md:text-2xl md:text-2xl text-text-300 font-headerFont font-bold"
          >
            About:
          </h6>
          <p class="text-lg text-text-200 font-bodyFont max-w-prose">
            {{ project.about }}
          </p>
        </section>
        <!-- images -->
        <section class="group w-full h-fit relative">
          <button
            id="pervious-btn"
            (click)="perviousImg()"
            class=" w-fit h-fit bg-background-700 absolute top-1/2 left-1 -translate-y-1/2 rounded-sm shadow-sm shadow-background-950 opacity-0 group-hover:opacity-95 ease-in-out duration-500 z-50"
          >
            <svg
              class="w-16 h-16 text-text-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          <img
            [src]="currentImgSrc$ | async"
            alt=""
            class="w-fit h-fit shadow-xl shadow-background-800 mx-auto"
          />

          <button
            id="next-btn"
            (click)="nextImg()"
            class="w-fit h-fit bg-background-700 absolute top-1/2 right-1 -translate-y-1/2 rounded-sm shadow-sm shadow-background-950 opacity-0 group-hover:opacity-95 ease-in-out duration-500 z-50"
          >
            <svg
              class="w-16 h-16 text-text-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </section>
        <section class="w-full h-fit flex flex-col">
          <h6
            class="max-md:text-2xl md:text-2xl text-text-300 font-headerFont font-bold"
          >
            Powered by Tech:
          </h6>
          <p class="text-lg text-text-200 font-bodyFont max-w-prose">
            {{ project.poweredByTech }}
          </p>
        </section>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProjectDetailsComponent {
  project!: project;
  private currentImgSrcSub = new BehaviorSubject('');
  currentImgSrc$ = this.currentImgSrcSub.asObservable();

  constructor(private route: ActivatedRoute, private title: Title) {
    this.route.paramMap
      .pipe(
        map((param) => {
          const name = param.get('name');
          this.project = projects.find((proj) => proj.name === name)!;
        }),
        takeUntilDestroyed()
      )
      .subscribe();

    this.currentImgSrcSub.next(this.project.images_src[0]);
  }

  nextImg() {
    if (!this.project || !this.project.images_src) {
      return;
    }
    const imageArr = Object.values(this.project.images_src);
    const currentIndex = imageArr.indexOf(this.currentImgSrcSub.value);
    const nextIndex = (currentIndex + 1) % imageArr.length;
    this.currentImgSrcSub.next(imageArr[nextIndex]);
  }

  perviousImg() {
    if (!this.project || !this.project.images_src) {
      return;
    }
    const imageArr = Object.values(this.project.images_src);
    const currentIndex = imageArr.indexOf(this.currentImgSrcSub.value);
    const prevIndex = (currentIndex - 1 + imageArr.length) % imageArr.length;
    this.currentImgSrcSub.next(imageArr[prevIndex]);
  }
}
