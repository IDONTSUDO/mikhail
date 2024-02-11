import { NumberExtensions } from "./number";
declare global {
  interface Number {
    fh(offset?: number): string;
    fw(offset?: number): string;
    // screen heights less equal
    shLessEq(): boolean;
  }
}
export const extensions = () => {
  NumberExtensions();
};
