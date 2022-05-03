import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks(
    @Query() filterDto: GetTasksFilterDto,
    @User('name') name: string,
  ) {
    const { err, data } = await this.tasksService.getTasks(filterDto);

    if (err) {
      throw err;
    }

    return data;
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    console.log(id, typeof id);
  }
}
