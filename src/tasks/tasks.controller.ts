import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDTO } from './dto/create-task.dto';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {

        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(@Body() body: createTaskDTO) {

        return this.tasksService.createTask(body)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id)
    }

}
