import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  user?: Record<string, unknown>;
  companyCode: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: CustomRequest, res: Response, next: NextFunction) {
    req.user = { name: 'dkm', id: 4 };
    req.companyCode = '5';

    next();
  }
}
