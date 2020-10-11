import { PROPERTY_SOURCE_TOKEN } from '../value.constants';

/**
 * TODO: add default property source injection
 **/
export function PropertySource(name?: string): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata(PROPERTY_SOURCE_TOKEN, name, target);
  };
}
