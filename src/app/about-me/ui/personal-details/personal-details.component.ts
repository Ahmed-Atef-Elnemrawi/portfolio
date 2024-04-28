import { Component } from '@angular/core';

@Component({
  selector: 'personal-details',
  standalone: true,
  imports: [],
  template: `
    <div
      class="w-[30dvw] h-[88%] md:min-w-72 relative -bottom-1 py-6 px-4 flex flex-col place-content-center place-items-center space-y-8 bg-background-900 rounded-md max-md:h-[calc(84dvh-64px)] max-md:place-content-center"
    >
      <div class="w-fit h-fit relative z-0">
        <div
          id="image-wrapper"
          class="h-[140px] w-[144px] bg-portfolio_img bg-cover bg-no-repeat z-30 border-4 border-background-700 dark:border-background-600 after:w-full after:h-full after:bg-accent-700 after:block after:-z-20 after:relative after:-top-2 after:left-2  border-r-0 max-md:border-t-0 max-md:shadow-2xl shadow-2xl shadow-background-800"
        ></div>
      </div>
      <div>
        <p
          class="font-bodyFont font-bold text-text-200 text-center capitalize text-nowrap leading-relaxed"
        >
          {{ 'Ahmed Atef El-nemrawi' }}
        </p>
        <p
          class="font-bodyFont font-bold text-text-300 text-center text-[12px] opacity-85"
        >
          {{ 'ah.at.elnemrawi@gmail.com' }}
        </p>
      </div>

      <a
      download="Ahmed Atef.pdf"
      href="../../../../assets/Ahmed_Atef.pdf"
        class="bg-background-800 rounded-sm shadow-2xl shadow-background-900 py-2 px-4 text-base font-bold text-text-200"
      >
        Download CV
      </a>
    </div>
  `,
  styles: `
    #image-wrapper,
  #image-wrapper::after{
    border-radius: 0% 0% 0% 49% / 9% 24% 9% 50% ;
  }

  `,
})
export class PersonalDetailsComponent {}
