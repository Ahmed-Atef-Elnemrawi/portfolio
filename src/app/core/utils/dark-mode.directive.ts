import { Directive, computed, inject } from '@angular/core';
import { AppSettingsService } from '../data-access/app-settings.service';

/**
 * This directive toggles the Tailwind CSS `dark` `class`
 * on the element with the ID `main-content` based on the current dark mode state.
 */
@Directive({
  selector: '#main-content',
  standalone: true,
  host: {
    '[class.dark]': 'isDarkMode()',
  },
})
export class DarkModeDirective {
  appSetting = inject(AppSettingsService);
  isDarkMode = computed(() => this.appSetting.isDarkMode());
}
