//import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Body,Controller, Res,Delete, Get,Param, Logger, Post, Put,UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Helper } from '../../helpers/helper';

import { GroupDto } from '../dto/group.dto';
import { GroupService } from '../service/group/group.service';
import { Observable, of } from 'rxjs';

@Controller('group')
export class GroupController {
  constructor(private GroupService: GroupService){}

 
  @Post('/save')
  async create(@Body() user: GroupDto): Promise<GroupDto> {

    const userData = await this.GroupService.create(user);
    return { status: true,msg:'Your account successfully created',uData: userData};

  }



  @Get('/list/:userID')
  async findAll(@Param('userID') userID: string): Promise<GroupDto[]> {
    return this.GroupService.findAll(userID);
  }



  @Get('getProfile/:id')
  async getProfile(@Param('id') id: string): Promise<GroupDto | { message: string }> {
    const user = await this.GroupService.findOne(id)
    return user ? user : { message: 'User not found'};
  }


  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GroupDto | { message: string }> {
    const user = await this.GroupService.findOne(id)
    return user ? user : { message: 'User not found'};
  }



  @Delete(':id')
  async delete(@Param('id') id: string): Promise<GroupDto | { message: string }> {
    const user = await this.GroupService.delete(id)
    return user ? user : { message: 'User not found'};
  }
}
