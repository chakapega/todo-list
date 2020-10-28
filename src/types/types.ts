export type taskType = {
  id: number;
  taskDescription: string;
};

export type tasksType = Array<taskType>;

export type TaskPropsType = {
  task: taskType;
  deleteTask: (taskId: number) => void;
};

export type functionSubscriberType = () => void;

export type functionsSubscribersType = Array<functionSubscriberType>;
