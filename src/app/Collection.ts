export class Collection<T = any> {
  public static collection: Collection = new Collection();
  private containerMap = new Map<string | symbol, any>();

  private constructor() {
    console.log('Collection created');
  }

  public static test(): void {
    console.log('Collection test');
  }

  public add(key: string | symbol, value: T): void {
    this.containerMap.set(key, value);
  }

  public get(key: string | symbol): T {
    return this.containerMap.get(key);
  }

  public has(key: string | symbol): boolean {
    return this.containerMap.has(key);
  }
}

export default Collection.collection;
