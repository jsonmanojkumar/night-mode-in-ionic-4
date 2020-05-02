import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode: any;
  renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    private storage: Storage,
    @Inject(DOCUMENT) private document: Document) {

    this.renderer = this.rendererFactory.createRenderer(null, null);

  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark');
    this.storage.set('dark', true);
    this.darkMode = true;
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark');
    this.storage.set('dark', false);
    this.darkMode = false;
  }


  themeMode() {
    if (this.darkMode) {
      this.enableLight();
      console.log('Dark Mode', this.darkMode);

    } else {
      this.enableDark();
      console.log('Dark Mode', this.darkMode);
    }
  }

}
