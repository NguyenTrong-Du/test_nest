import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksRepository {
  constructor(@Inject('DATABASE_POOL') private conn: Pool) {}
  async find(filterDto: GetTasksFilterDto) {
    const { limit, offset } = filterDto;
    return await this.conn.query(
      `
              SELECT
                companies.id AS company_id
              FROM companies
              INNER JOIN contexts ON contexts.company_id = companies.id
              LIMIT $1
              OFFSET $2
            `,
      [limit, offset],
    );
  }
}
