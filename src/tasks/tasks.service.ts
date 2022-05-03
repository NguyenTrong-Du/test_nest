import { Injectable } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TasksRepository) {}

  async getTasks(filterDto: GetTasksFilterDto) {
    try {
      const tasks = await this.taskRepository.getTasks(filterDto);
      return { err: null, data: tasks };
    } catch (error) {
      return {
        err: error.message,
        data: null,
      };
    }
  }
}
