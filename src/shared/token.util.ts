import { PROPERTY_SOURCE_OPTIONS_TOKEN, PROPERTY_SOURCE_TOKEN } from '../value.constants';

export const getPropertySourceOptionsToken = (name: string = PROPERTY_SOURCE_OPTIONS_TOKEN) => {
  if (name == PROPERTY_SOURCE_OPTIONS_TOKEN) {
    return PROPERTY_SOURCE_OPTIONS_TOKEN;
  }

  return `${name}_${PROPERTY_SOURCE_OPTIONS_TOKEN}`;
};

export const getPropertySourceToken = (name: string = PROPERTY_SOURCE_TOKEN) => {
  if (name === PROPERTY_SOURCE_TOKEN) {
    return PROPERTY_SOURCE_TOKEN;
  }

  return `${name}_${PROPERTY_SOURCE_TOKEN}`;
};
