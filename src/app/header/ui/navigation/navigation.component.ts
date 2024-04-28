import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'portfolio-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- menu button -->
    <button
      type="button"
      id="menu-btn"
      class="md:hidden leading-tight w-fit h-fit z-50"
    >
      <svg
        class="w-6 h-6 fill-accent-300"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill-ruer:text-text-300
          font-headerFont
          text-lg
          font-bold="evenodd"
          d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
        />
      </svg>
    </button>
    <div
      id="menu"
      class="w-dvw h-dvh top-0 left-0 bottom-0 md:w-fit md:h-fit max-md:-translate-x-full backdrop-blur-sm max-md:fixed"
    >
      <ul
        class="flex max-md:w-[75dvw] max-md:h-full max-md:bg-background-900 max-md:flex-col max-md:place-content-center max-md:space-y-12 px-4 md:flex-row  max-lg:px-6 relative"
      >
        <!-- close-btn -->
        <button
          id="close-btn"
          type="button"
          class="max-md:block md:hidden absolute top-20 right-10 hover:rotate-90 duration-150"
          title="close"
        >
          <svg
            class="w-7 h-7 text-text-200 dark:text-white"
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
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
        <!-- home button -->
        <button
          routerLink="/home"
          (click)="closeMenu()"
          routerLinkActive="text-text-300"
          type="button"
          class="group text-text-200 tracking-wider hover:text-text-300 font-headerFont text-lg font-bold rounded-sm mx-1 px-1.5 py-1.5  relative"
        >
          Home
          <span
            routerLinkActive="scale-x-100 scale-x-100 transition-transform   ease-in-out duration-200 origin-left shadow-2xl shadow-background-900"
            class="max-md:hidden group block w-full h-1 absolute inset-x-0 bottom-0 bg-background-800 scale-x-0"
          ></span>
        </button>
        <button
          routerLink="/projects"
          (click)="closeMenu()"
          type="button"
          class="group text-text-200 tracking-wider hover:text-text-300 font-headerFont text-lg font-bold rounded-sm mx-1 px-1.5 py-1.5  relative"
        >
          Projects
          <span
            routerLinkActive="scale-x-100  scale-x-100 transition-transform   ease-in-out duration-200 origin-left shadow-2xl shadow-background-900"
            class="max-md:hidden group block w-full h-1 absolute inset-x-0 bottom-0 bg-background-800 scale-x-0"
          ></span>
        </button>
        <button
          routerLink="/about"
          (click)="closeMenu()"
          routerLinkActive="text-text-300"
          type="button"
          class="group text-text-200 tracking-wider hover:text-text-300 font-headerFont text-lg font-bold rounded-sm mx-1 px-1.5 py-1.5  relative"
        >
          About Me
          <span
            routerLinkActive="scale-x-100  scale-x-100 transition-transform   ease-in-out duration-200 origin-left shadow-2xl shadow-background-900"
            class="max-md:hidden group block w-full h-1 absolute inset-x-0 bottom-0 bg-background-800 scale-x-0"
          ></span>
        </button>
        <button
        routerLink="/contact"
        (click)="closeMenu()"
          routerLinkActive="text-text-300"
          type="button"
          class="group text-text-200 tracking-wider hover:text-text-300 font-headerFont text-lg font-bold border-transparent rounded-sm  mx-1 px-1.5 py-1.5  relative"
        >
          Contact Me
          <span
            routerLinkActive="scale-x-100  scale-x-100 transition-transform   ease-in-out duration-200 origin-left shadow-2xl shadow-background-900"
            class="max-md:hidden group block w-full h-1 absolute inset-x-0 bottom-0 bg-background-800 scale-x-0"
          ></span>
        </button>
      </ul>
    </div>
  `,
  styles: `
    :host{
      display:block;
      position:relative;
      z-index:9999999999;
    }
  `,
})
export class NavigationComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const menuEl = this.el.nativeElement.querySelector('#menu');
    const menuBtn = this.el.nativeElement.querySelector('#menu-btn');
    const closeBtn = this.el.nativeElement.querySelector('#close-btn');

    this.renderer.listen(menuBtn, 'click', () => {
      gsap.to(menuEl, {
        x: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    });

    this.renderer.listen(closeBtn, 'click', () => {
      this.closeMenu();
    });
  }

  closeMenu() {
    const query = 'not all and (min-width: 640px)';

    if (window.matchMedia(query).matches) {
      gsap.to('#menu', {
        x: '-100%',
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }
  }
}
