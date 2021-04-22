export interface Todo {
  id: string;
  title: string;
  description?: string;
  datetime: Date;
  isDone: boolean;
}
