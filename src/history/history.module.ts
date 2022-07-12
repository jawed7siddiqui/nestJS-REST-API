import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryController } from './controller/history.controller';
import { HistoryEntity } from './entity/history.entity';
import { HistoryService } from './service/history/history.service';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity])],
  controllers: [HistoryController],
  providers: [HistoryService]
})
export class HistoryModule {}
