import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryDto } from 'src/history/dto/history.dto';
import { HistoryEntity } from 'src/history/entity/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>
  ){}

  async create(history: HistoryDto): Promise<HistoryDto> {
    return this.historyRepository.save(history);
  }

  async findAll(userID: string): Promise<HistoryDto[]> {
    return this.historyRepository.find({
      where: {
       user_id: userID,
     },
    order:{
      id:'DESC'
    }},
     );
  }

  async findOne(id: string): Promise<HistoryDto> {
    return this.historyRepository.findOne(id);
  }

  async getProfile(id: string): Promise<HistoryDto> {
    return this.historyRepository.findOne(id);
  }

  async getSessionhistory(id: string): Promise<HistoryDto> {
    return this.historyRepository.findOne(id);
  }



  async findOnConditions(email: string): Promise<HistoryDto> {
    return this.historyRepository.findOne({
       where: {
        email: email,
      }});
   
  }

  async login(email: string,password: string): Promise<HistoryDto> {
    return this.historyRepository.findOne({
       where: {
        email: email,
        password: password,
      }});
   
  }





  async delete(id: string): Promise<HistoryDto | null> {
    const user = await this.historyRepository.findOne(id);
    if (!user) return null;
    await this.historyRepository.delete(id)
    return user;
  }
}
