import { model, Schema } from 'mongoose';
// Interfaces
import { ITodo } from '../types/todo';

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<ITodo>('Todo', todoSchema);
