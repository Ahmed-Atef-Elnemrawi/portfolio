import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AppSettingsService } from '../../../core/data-access/app-settings.service';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class=" w-14 min-w flex place-items-center place-content-center">
      @if (!isDarkMode()) {
      <button id="toggle-off" (click)="switchToDarkMode()">
        <svg
          class="w-8 h-8 text-accent-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      } @else {
      <button id="toggle-on" (click)="switchToLightMode()">
        <svg
          class="w-8 h-8 text-accent-300"
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
            d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
        </svg>
      </button>
      }
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  isDarkMode = signal(this.appSetting.isDarkMode());

  constructor(private appSetting: AppSettingsService) {}

  switchToDarkMode() {
    this.isDarkMode.update(() => true);
    this.appSetting.toggleDarkModeState(true);
  }

  switchToLightMode() {
    this.isDarkMode.update(() => false);
    this.appSetting.toggleDarkModeState(false);
  }
}
