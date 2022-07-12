import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HistoryModule } from './history/history.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { GroupModule } from './group/group.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    HistoryModule,
    WorkspaceModule,
    GroupModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
