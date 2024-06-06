import { Response, type NextFunction, type Request } from 'express';

import { HttpStatusCode } from 'axios';
import { type CustomResponse } from '@/types/common.type';
import Api from '@/lib/api';

export default class UserController extends Api {
  public checkHealth = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      this.send(res, 'System Healthy!', HttpStatusCode.Ok, 'Health Status');
    } catch (e) {
      next(e);
    }
  };
}
