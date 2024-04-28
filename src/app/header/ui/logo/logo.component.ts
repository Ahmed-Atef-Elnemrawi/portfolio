import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-logo',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex space-x-2 place-items-center place-content-center  cursor-default relative after:block after:w-[92%] after:h-1  after:bg-background-800 after:rounded-sm after:absolute after:-bottom-3 before:block before:w-[72%] before:h-1 before:bg-background-800 before:rounded-sm before:absolute before:-bottom-5"
    >
      <span
        class=" font-logoFont text-3xl md:text-3xl bg-background-700 text-center rounded-sm leading-[2.2rem] px-1.5 font-medium"
      >
        A
      </span>
      <span
        class=" font-logoFont text-2xl md:text-3xl text-text-200 font-bold tracking-wide"
      >
        Ahmed Atef
      </span>
    </div>
  `,
  styles: `
  :host{
      display:block;
      position:relative;
      width:fit-content;
      height:fit-content;
      z-index:999999;
    }
  `,
})
export class LogoComponent {}
