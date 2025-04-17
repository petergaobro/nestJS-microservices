import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // constructor(@Inject('USERS_CLIENT') private usersService: UsersService) {}
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    // return this.usersClient.send('users.findAll', {});
    return this.usersService.findAll();
  }
}
