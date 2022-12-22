import { Inject, Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { HTTP_EXCEPTION_ERROR_MESSAGES } from 'src/utils/constants';

@ValidatorConstraint({ name: 'IsGroupExisted', async: true })
@Injectable()
export class IsGroupExisted implements ValidatorConstraintInterface {
  constructor(@Inject('DATABASE_POOL') private conn: any) {}

  async validate(value: string) {
    try {
      const queryData = await this.conn.query(
        `
          SELECT * 
          FROM groups 
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
    return HTTP_EXCEPTION_ERROR_MESSAGES.GROUP_DOES_NOT_EXIST;
  }
}
