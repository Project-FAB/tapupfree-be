import { Response, type NextFunction, type Request } from 'express';

import { HttpStatusCode } from 'axios';
import UserService from './users.service';
import { type CustomResponse } from '@/types/common.type';
import Api from '@/lib/api';

export type Users = {
  firstName: string;
  lastName: string;
  image: string;
  phoneNumber: string;
  company: string;
  position: string;
  email: string;
  createdAt: string;
  user_link: string;
  id: string;
  userCode: string;
  printStatus: boolean;
};

export default class UserController extends Api {
  private readonly userService = new UserService();

  public getUsers = async (
    req: Request,
    res: CustomResponse<Users>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user = await this.userService.getUserById(req.params.id);
      this.send(res, user, HttpStatusCode.Ok, 'User fetched successfully');
    } catch (e) {
      next(e);
    }
  };
}
