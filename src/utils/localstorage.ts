export class Localstorage {
  static setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string): unknown {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
