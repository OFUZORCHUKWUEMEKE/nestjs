import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';
import {ConfigService} from '@nestjs/config'

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly reflector:Reflector,private readonly configService:ConfigService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY,context.getHandler())
    const request = context.switchToHttp().getRequest<Request>()
    
    if(isPublic){
      return true
    }
    const authHeader = request.header('Authorization')
    return authHeader === this.configService.get('API_KEY')
  }
}
