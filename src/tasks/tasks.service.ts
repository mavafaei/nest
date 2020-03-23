import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './tasks.model';
import * as uuid from 'uuid/v4'
import { createTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks(): Task[] {
        return this.tasks
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }


    createTask(body: createTaskDTO): Task {
        const { title, description } = body
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TasksStatus.OPEN
        }

        this.tasks.push(task)
        return task
    }

    deleteTask(id: string): Task[] {
        this.tasks = this.tasks.filter(task => task.id !== id)

        return this.tasks

    }
}
