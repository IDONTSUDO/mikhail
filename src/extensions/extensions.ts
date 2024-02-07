import { NumberExtensions } from "./number";
declare global {
  interface Number {
    fh(): string;
    fw(): string;
  }
}
export const extensions = () => {
  NumberExtensions();
};
