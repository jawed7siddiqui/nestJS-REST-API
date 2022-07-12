//import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Body,Controller, Res,Delete, Get,Param, Logger, Post, Put,UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Helper } from '../../helpers/helper';

import { WorkspaceDto } from '../dto/workspace.dto';
import { WorkspaceService } from '../service/workspace/workspace.service';
import { Observable, of } from 'rxjs';

@Controller('workspace')
export class WorkspaceController {
  constructor(private WorkspaceService: WorkspaceService){}

 
  @Post('/save')
  async create(@Body() user: WorkspaceDto): Promise<WorkspaceDto> {

    const userData = await this.WorkspaceService.create(user);
    return { status: true,msg:'Your account successfully created',uData: userData};

  }



  @Get('/list/:userID')
  async findAll(@Param('userID') userID: string): Promise<WorkspaceDto[]> {
    return this.WorkspaceService.findAll(userID);
  }



  @Get('getProfile/:id')
  async getProfile(@Param('id') id: string): Promise<WorkspaceDto | { message: string }> {
    const user = await this.WorkspaceService.findOne(id)
    return user ? user : { message: 'User not found'};
  }


  @Get(':id')
  async findOne(@Param('id') id: string): Promise<WorkspaceDto | { message: string }> {
    const user = await this.WorkspaceService.findOne(id)
    return user ? user : { message: 'User not found'};
  }



  @Delete(':id')
  async delete(@Param('id') id: string): Promise<WorkspaceDto | { message: string }> {
    const user = await this.WorkspaceService.delete(id)
    return user ? user : { message: 'User not found'};
  }
}
