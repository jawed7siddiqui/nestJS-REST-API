//import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Body,Controller, Res,Delete, Get,Param, Logger, Post, Put,UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Helper } from '../../helpers/helper';

import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';
import { Observable, of } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private userService: UserService){}

 
  @Post('/signup')
  async create(@Body() user: UserDto): Promise<UserDto> {

       const data = await this.userService.findOnConditions(user['email']);

    
    if(data){
    return { status: false,msg:'Emai already exists'};
    }

  //user['email']);
    // return data;
    const userData = await this.userService.create(user);
    return { status: true,msg:'Your account successfully created',uData: userData};

  }


  @Post('/login')
  async login(@Body() user: UserDto): Promise<UserDto> {

    const data = await this.userService.login(user['email'],user['password']);

    
    if(!data){
    return { status: false,msg:'Something went wrong'};
    }

    return { status: true,msg:'You have successfully logged in!',data:data};


  }



  // @Post('upload/avatar/:id')
  // @UseInterceptors(FileInterceptor('avatar', { dest: './uploads'}))
  // async uploadSingle(@Param('id') id: string, @UploadedFile() file) {
  //   return  await this.userService.updateAvatar(id,file);
  //   console.log(file);
  // }

  @Post('upload/avatar/:id')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
      }),
    }),
  )
  async uploadSingle(@Param('id') id: string, @UploadedFile() file) {
    return  await this.userService.updateAvatar(id,file);
    console.log(file);
  }



  // createPost(@Body() body) {
  //   return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
  // }

  @Get('media/:filename')
  seeUploadedFile(@Param('filename') image, @Res() res) {
   // if(image)
    return res.sendFile(image, { root: './uploads' });
  }

  // @Post('uploads') //for multple uploads
  // @UseInterceptors(FilesInterceptor('photos[]', 10, { dest: './uploads' }))
  // uploadMultiple(@UploadedFiles() files) {
  //   console.log(files);
  // }

  @Get('getSessionhistory/:id')
  async getSessionhistory(@Param('id') id: string): Promise<UserDto | { message: string }> {
    const user = await this.userService.updateAvatar(id,1);
    return user ? user : { message: 'User not found'};
  }


  @Get('/list')
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get('getProfile/:id')
  async getProfile(@Param('id') id: string): Promise<UserDto | { message: string }> {
    const user = await this.userService.findOne(id)
    return user ? user : { message: 'User not found'};
  }

  @Post('remove/avatar/:id')
  async rmProfile(@Param('id') id: string,file:string): Promise<any> {
    const userUpdate = await this.userService.rmProfile(id, file=null);
    return userUpdate ? userUpdate : { message: 'File not remove'};
  }

  // @Get('media/:filename')
  // seeUploadedFile(@Param('filename') filename, @Res() res) { 
  //   return of(res.SendFile(join(process.cwd(),'uploads/'+filename)));
  // }

  // @Post('upload/avatar/:id')
  // async rmProfile(@Param('id') id: string, file:string) {
  //   return  await this.userService.updateAvatar(id,file);
  //   console.log(file);
  // }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto | { message: string }> {
    const user = await this.userService.findOne(id)
    return user ? user : { message: 'User not found'};
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UserDto): Promise<UserDto | { message: string }> {
    const userUpdate = await this.userService.update(id, user);
    return userUpdate ? userUpdate : { message: 'User not found'};
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDto | { message: string }> {
    const user = await this.userService.delete(id)
    return user ? user : { message: 'User not found'};
  }
}
