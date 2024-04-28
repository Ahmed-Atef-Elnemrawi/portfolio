import { Component } from '@angular/core';
import { PersonalDetailsComponent } from './ui/personal-details/personal-details.component';
import { IntroSectionComponent } from './ui/intro-section/intro-section.component';
import { SkillsOverviewComponent } from './ui/skills-overview/skills-overview.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    PersonalDetailsComponent,
    IntroSectionComponent,
    SkillsOverviewComponent,
  ],
  template: `
    <div
      class="w-dvw h-[84dvh] max-md:max-h-[84dvh] max-md:h-fit max-md:overflow-y-scroll md:h-[calc(80dvh+25px)] bg-background-950  max-md:px-4 md:px-10  max-md:py-16 md:pt-12 flex md:flex-row md:space-x-8 lg:space-x-14 max-md:flex-col max-md:gap-y-12"
    >
      <personal-details class="max-md:order-2 max-md:hidden" />

      <intro-section class="max-md:order-1" />
    </div>
  `,
  styles: ``,
})
export class AboutMeComponent {}
