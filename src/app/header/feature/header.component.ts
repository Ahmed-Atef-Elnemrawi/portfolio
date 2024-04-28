import { Component } from '@angular/core';
import { AppSettingsService } from '../../core/data-access/app-settings.service';
import { ThemeToggleComponent } from '../ui/theme-toggle/theme-toggle.component';
import { NavigationComponent } from '../ui/navigation/navigation.component';
import { LogoComponent } from '../ui/logo/logo.component';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  imports: [ThemeToggleComponent, NavigationComponent, LogoComponent],
  template: `
  <div class="w-dvw max-h-fit h-[16dvh] md:h-[calc(20dvh-25px)] flex place-content-between px-6 place-items-center shadow-2xl shadow-background-950 ">
  <!-- md:place-self-end md:absolute md:top-10 -->
    <portfolio-navigation class="md:order-2"/>
    <portfolio-logo class="md:order-1"/>
    <theme-toggle class="md:order-3"/>
  </div>
  `,
  styles: `
  `,
})
export class HeaderComponent {
  constructor(private appSetting: AppSettingsService) {}

  handleDarkMode() {
    this.appSetting.toggleDarkModeState(true);
  }

  handleLightMode() {
    this.appSetting.toggleDarkModeState(false);
  }
}
