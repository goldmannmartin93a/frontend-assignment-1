import {Request, Response} from 'express';
import {isNilOrEmpty} from 'ramda-adjunct';

export const validateTodoIdFromParams = (req: Request, res: Response): string => {
  const {id} = req.params;

  if (isNilOrEmpty(id)) {
    res.status(400).json({error: 'Todo id is required'});
    throw new Error('Todo id is required');
  }

  if (Array.isArray(id)) {
    res.status(400).json({error: 'Invalid todo id'});
    throw new Error('Todo id is array');
  }

  return id;
};
