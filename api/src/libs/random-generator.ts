export class RandomGenerator {
  static randomSort = (items: string[]) =>
    items.sort(() => 0.5 - Math.random());
}
