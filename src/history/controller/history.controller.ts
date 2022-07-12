//import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Body,Controller, Res,Delete, Get,Param, Logger, Post, Put,UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Helper } from '../../helpers/helper';

import { HistoryDto } from '../dto/history.dto';
import { HistoryService } from '../service/history/history.service';
import { Observable, of } from 'rxjs';

@Controller('history')
export class HistoryController {
  constructor(private HistoryService: HistoryService){}

 
  @Post('/save')
  async create(@Body() user: HistoryDto): Promise<HistoryDto> {

   //    const data = await this.HistoryService.findOnConditions(user['email']);

    
    // if(data){
    // return { status: false,msg:'Emai already exists'};
    // }

  //user['email']);
    // return data;
    const userData = await this.HistoryService.create(user);
    return { status: true,msg:'Your account successfully created',uData: userData};

  }


  @Post('/login')
  async login(@Body() user: HistoryDto): Promise<HistoryDto> {

    const data = await this.HistoryService.login(user['email'],user['password']);

    
    if(!data){
    return { status: false,msg:'Something went wrong'};
    }

    return { status: true,msg:'You have successfully logged in!',data:data};


  }



  // @Post('upload/avatar/:id')
  // @UseInterceptors(FileInterceptor('avatar', { dest: './uploads'}))
  // async uploadSingle(@Param('id') id: string, @UploadedFile() file) {
  //   return  await this.HistoryService.updateAvatar(id,file);
  //   console.log(file);
  // }




  // createPost(@Body() body) {
  //   return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
  // }

  @Get('media/:filename')
  seeUploadedFile(@Param('filename') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }

  // @Post('uploads') //for multple uploads
  // @UseInterceptors(FilesInterceptor('photos[]', 10, { dest: './uploads' }))
  // uploadMultiple(@UploadedFiles() files) {
  //   console.log(files);
  // }




  @Get('/list/:userID')
  async findAll(@Param('userID') userID: string): Promise<HistoryDto[]> {
    return this.HistoryService.findAll(userID);
  }



  @Get('getProfile/:id')
  async getProfile(@Param('id') id: string): Promise<HistoryDto | { message: string }> {
    const user = await this.HistoryService.findOne(id)
    return user ? user : { message: 'User not found'};
  }



  // @Get('media/:filename')
  // seeUploadedFile(@Param('filename') filename, @Res() res) { 
  //   return of(res.SendFile(join(process.cwd(),'uploads/'+filename)));
  // }

  // @Post('upload/avatar/:id')
  // async rmProfile(@Param('id') id: string, file:string) {
  //   return  await this.HistoryService.updateAvatar(id,file);
  //   console.log(file);
  // }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HistoryDto | { message: string }> {
    const user = await this.HistoryService.findOne(id)
    return user ? user : { message: 'User not found'};
  }



  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HistoryDto | { message: string }> {
    const user = await this.HistoryService.delete(id)
    return user ? user : { message: 'User not found'};
  }
}
