import { VALUE_TOKEN } from '../value.constants';

export function Value(expression: string): PropertyDecorator {
  return function (target, propertyKey) {
    Reflect.defineMetadata(VALUE_TOKEN, expression, target[propertyKey]);
  };
}
