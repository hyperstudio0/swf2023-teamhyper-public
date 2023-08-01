import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UserEntity } from '../domain/user/user.entity';
import { Request } from 'express';
export async function hashPassword(password: string): Promise<string> {
  if (password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }
  throw new HttpException('Error Hash Password', HttpStatus.UNAUTHORIZED);
}

export async function checkPassword(
  password: string,
  comparePassword: string,
): Promise<boolean> {
  return bcrypt.compare(password, comparePassword);
}

export function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}

export async function jwtPayload(user: UserEntity): Promise<any> {
  const authorities = user.authorities
    ? user.authorities.map((authority) => {
        return authority.role;
      })
    : [];

  const payload = {
    email: user.email,
    role: authorities,
    sub: user.id,
  };

  console.log(payload, 'payload');
  return payload;
}
