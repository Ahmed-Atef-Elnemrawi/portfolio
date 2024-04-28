import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styles: `

  :host{
    display:block;
    width:fit-content;
    height:fit-content;
    position:relative;
  }

  #image-wrapper,
  #image-wrapper::after{
    border-radius: 0% 0% 0% 49% / 9% 24% 9% 50% ;
  }

//   @media not all and (min-width: 640px) {
//     #image-wrapper,
//     #image-wrapper::after{
//       border-radius:2px;

//     }
// }
  `,
})
export class LandingPageComponent {}
