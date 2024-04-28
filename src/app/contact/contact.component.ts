import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="w-dvw h-[84dvh] md:h-[calc(80dvh+25px)] mx-auto overflow-y-scroll py-20 px-6 md:px-32 relative">
      <ul class="w-full md:w-[75%] h-fit relative flex flex-col place-items-center mx-auto space-y-8 ">
        <li class="flex space-x-2">
          <span class="text-lg font-headerFont font-bold text-text-300">Github:</span>
          <span class="text-lg font-bodyFont font-bold text-text-100">https://github.com/Ahmed-Atef-Elnemrawi</span>
        </li>
        <li class="flex space-x-2">
          <span class="text-lg font-headerFont font-bold text-text-300">linkedIn:</span>
          <span class="text-lg font-bodyFont font-bold text-text-100">https://linkedin.com/in/ahmed-elnemrawi</span>
        </li>
        <li class="flex space-x-2">
          <span class="text-lg font-headerFont font-bold text-text-300">Email:</span>
          <a href="mailto:ah.at.elnemrawi@gamil.com" class="text-lg font-bodyFont font-bold text-text-100">{{'ah.at.elnemrawi@gmail.com'}}</a>
        </li>
        <li class="flex space-x-2">
          <span class="text-lg font-headerFont font-bold text-text-300">phone:</span>
          <a href="tel:+201093665958" class="text-lg font-bodyFont font-bold text-text-100">{{+201093665958}}</a>
        </li>
      </ul>
    </div>
  `,
  styles: ``
})
export class ContactComponent {

}
