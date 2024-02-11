import makeAutoObservable from "mobx-store-inheritance";
import { CoreColor } from "./color";

export class ThemeStore {
  setTheme(theme: any): void {
    this.colors.card = theme.card;
    this.colors.primary = theme.primary;
    this.colors.secondary = theme.secondary;
    this.colors.textPrimary = theme.textPrimary;
  }
  colors: CoreColor;
  constructor() {
    makeAutoObservable(this);
    this.colors = new CoreColor();
  }
}
