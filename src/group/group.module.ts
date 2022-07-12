import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './controller/group.controller';
import { GroupEntity } from './entity/group.entity';
import { GroupService } from './service/group/group.service';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupModule {}
