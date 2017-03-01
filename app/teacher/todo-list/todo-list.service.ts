import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoService {
    getTodos(): Todo[] {
        return [
            {order: 0, description: 'Question #1'},
            {order: 1, description: 'Question #2'},
            {order: 2, description: 'Question #3'},
            {order: 3, description: 'Question #4'},
        ];
    }
}
