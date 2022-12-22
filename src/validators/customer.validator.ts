import { Inject, Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { HTTP_VALIDATION_ERROR_MESSAGE } from 'src/utils/constants';

@ValidatorConstraint({ name: 'IsCustomerExisted', async: true })
@Injectable()
export class IsCustomerExisted implements ValidatorConstraintInterface {
  constructor(@Inject('DATABASE_POOL') private conn: any) {}

  async validate(value: number) {
    try {
      const queryData = await this.conn.query(
        `
          SELECT *
          FROM customers
          WHERE id = $1
        `,
        [value],
      );
      if (queryData.rows.length === 0) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }

  defaultMessage() {
    // here you can provide default error message if validation failed
    return HTTP_VALIDATION_ERROR_MESSAGE.IsCustomerExisted;
  }
}
