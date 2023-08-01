import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import * as process from 'process';
import { extractTokenFromHeader } from 'src/utils/auth.utils';
import { AuthedUser } from '../../model/login.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest();
    const clientIp = request.ip;
    const host = request.get('host');
    console.log(`Host: ${host}, IP: ${clientIp}`);
    const token = extractTokenFromHeader(request);
    if (!isPublic && !token) {
      throw new UnauthorizedException();
    }
    try {
      if (token) {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET_ADMIN_KEY,
        });

        const userId = payload['sub'];
        const email = payload['email'];
        const role = payload['role'];

        const authedUser = new AuthedUser();
        authedUser.userId = userId;
        authedUser.email = email;
        authedUser.role = role;
        request['authedUser'] = authedUser;
      }
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
