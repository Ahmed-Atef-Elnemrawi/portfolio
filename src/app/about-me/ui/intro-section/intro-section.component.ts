import { Component } from '@angular/core';
import { SKILLS } from './constants';

@Component({
  selector: 'intro-section',
  standalone: true,
  imports: [],
  template: `
    <div
      id="wrapper"
      class="w-full h-full flex flex-col space-y-4  px-4 max-md:space-y-20 overflow-y-scroll md:pb-16 lg:pb-0"
    >
      <div
        id="section"
        class="flex flex-col space-y-2 place-items-start max-md:h-fit max-md:place-content-center"
      >
        <h2
          class="max-md:text-4xl md:text-2xl text-text-400 capitalize font-headerFont leading-6"
        >
          about me
        </h2>
        <p
          class="md:text-[15px] max-md:text-lg text-text-200 font-semibold font-bodyFont text-balance max-w-prose leading-6"
        >
          Full-Stack Developer with expertise in C#, .NET Core Web API, and
          Angular. Passionate about building user-friendly web applications.
          Eager learner thriving in collaborative environments to contribute and
          grow. Quick learner, hard worker, and team player.
        </p>
      </div>
      <div
        id="section"
        class="flex flex-col space-y-2 place-items-start max-md:h-fit max-md:place-content-center"
      >
        <h2
          class="max-md:text-4xl md:text-2xl text-text-400 capitalize font-headerFont leading-6"
        >
          Education
        </h2>
        <p
          class="font-bodyFont md:text-[15px] max-md:text-lg font-semibold text-text-200 leading-6"
        >
          MIS. Computer & Business Administration
        </p>
      </div>
      <div
        id="section"
        class="flex flex-col space-y-2 place-items-start max-md:h-fit max-md:place-content-center"
      >
        <h2
          class="max-md:text-4xl md:text-2xl text-text-400 capitalize font-headerFont leading-6"
        >
          skills
        </h2>

        <ul class="list-disc list-inside max-md:list-none max-md:space-y-4">
          <li
            class="md:text-[15px] max-md:text-lg text-text-200 font-semibold font-bodyFont text-wrap max-w-prose leading-6"
          >
            <span class="font-bold  text-text-300"
              >{{ 'language:' + ' ' }}
            </span>
            <span class="max-md:block lowercase">{{ skills.PROGRAMMING_LANGS }}</span>
          </li>
          <li
            class="md:text-[15px] max-md:text-lg text-text-200 font-semibold font-bodyFont text-wrap max-w-prose leading-6"
          >
            <span class="font-bold  text-text-300">{{
              'Front-End:' + ' '
            }}</span>
            <span class="max-md:block lowercase">{{ skills.FRONTEND_SKILLS }}</span>
          </li>
          <li
            class="md:text-[15px] max-md:text-lg text-text-200 font-semibold font-bodyFont text-wrap max-w-prose max-md:flex-col  leading-6"
          >
            <span class="font-bold text-text-300">{{ 'Back-End:' + ' ' }}</span>
            <span class="max-md:block lowercase">{{ skills.BACKEND_SKILLS }}</span>
          </li>
          <li
            class="md:text-[15px] max-md:text-lg text-text-200 font-semibold font-bodyFont text-wrap max-w-prose leading-6"
          >
            <span class="font-bold  text-text-300 ">{{ 'Other:' + ' ' }}</span>
            <span class="max-md:block lowercase">{{
              skills.OTHER_TECHNICAL_SKILLS
            }}</span>
          </li>
        </ul>
      </div>
      <div
        id="section"
        class="w-full py-7 px-4 flex flex-col place-content-center place-items-center space-y-8 bg-background-900 rounded-md max-md:h-fit  md:hidden shadow-2xl"
      >
        <div class="w-fit h-fit relative z-0">
          <div
            id="image-wrapper"
            class="h-[140px] w-[144px] bg-portfolio_img bg-cover bg-no-repeat z-30 border-4 border-background-700 dark:border-background-600 after:w-full after:h-full after:bg-accent-700 after:block after:-z-20 after:relative after:-top-2 after:left-2  border-r-0 max-md:border-t-0 max-md:shadow-2xl shadow-background-800"
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
          class="bg-background-800 rounded-sm shadow-2xl shadow-background-900 py-2 px-4 text-[15px] font-bold text-text-200"
        >
          Download CV
        </a>
      </div>
    </div>
  `,
  styles: `
  #image-wrapper,
  #image-wrapper::after{
    border-radius: 0% 0% 0% 49% / 9% 24% 9% 50% ;
  }
  `,
})
export class IntroSectionComponent {
  skills = SKILLS;
}
