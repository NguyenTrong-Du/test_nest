import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import AppResponse from '../common/models/AppResponse';
import { HTTP_EXCEPTION_ERROR_MESSAGES } from '../utils/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const routeScopes = this.reflector.get<string[]>(
      'scopes',
      context.getHandler(),
    );

    if (routeScopes.length === 0) {
      return true;
    }

    const authorizedScopes = request.scope.filter((element) =>
      routeScopes.includes(element),
    );

    if (authorizedScopes.length > 0) {
      return true;
    }

    throw AppResponse.forbidden([
      HTTP_EXCEPTION_ERROR_MESSAGES.FORBIDDEN_RESOURCE,
    ]);
  }
}
