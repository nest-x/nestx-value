import { Optional } from '@nestjs/common';

/**
 * TODO: add constructor using Record<string,any> as constructor
 *
 **/

export class PropertySourceProvider<K = Record<string, any>> {
  constructor(private readonly internalConfig: Record<string, any> = {}) {}

  get(expression: string) {
    // TODO: further design
    return this.internalConfig.get(expression);
  }
}
