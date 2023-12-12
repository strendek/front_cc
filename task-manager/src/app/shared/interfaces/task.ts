import { User } from 'src/app/shared/interfaces/user';

export interface Task {
    id: number;
    description: string;
    user: User;
  }