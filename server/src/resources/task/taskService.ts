import { TasksType, TaskType } from '../../types';

import taskDbRepository from './taskDbRepository';

const get = async (): Promise<TasksType> => await taskDbRepository.get();

const add = async (task: TaskType): Promise<void> => await taskDbRepository.add(task);

const deleteTask = async (id: string): Promise<void> => await taskDbRepository.deleteTask(id);

const edit = async (editedTask: TaskType): Promise<void> => await taskDbRepository.edit(editedTask);

export default { get, add, deleteTask, edit };
