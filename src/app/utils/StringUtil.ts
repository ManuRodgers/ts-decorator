export class StringUtil {
  public static trimSpaces(str: string): string {
    return str.replace(/\s+/g, '');
  }
}
