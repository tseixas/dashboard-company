/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

const VALID_IMAGE_TYPES = ['image/png'];

export function IsImage(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isImage',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          if (!value || typeof value !== 'object' || !value.mimetype)
            return false;
          return VALID_IMAGE_TYPES.includes(value.mimetype);
        },
        defaultMessage(_args: ValidationArguments) {
          return 'A imagem deve ser do tipo PNG';
        },
      },
    });
  };
}
