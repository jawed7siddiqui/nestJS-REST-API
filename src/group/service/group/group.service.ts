import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupDto } from 'src/group/dto/group.dto';
import { GroupEntity } from 'src/group/entity/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupEntity)
    private groupRepository: Repository<GroupEntity>
  ){}

  async create(group: GroupDto): Promise<GroupDto> {
    return this.groupRepository.save(group);
  }

  async findAll(userID: string): Promise<GroupDto[]> {
    return this.groupRepository.find({
      where: {
       user_id: userID,
     },
    order:{
      id:'DESC'
    }},
     );
  }

  async findOne(id: string): Promise<GroupDto> {
    return this.groupRepository.findOne(id);
  }

  async getProfile(id: string): Promise<GroupDto> {
    return this.groupRepository.findOne(id);
  }

  async getSessiongroup(id: string): Promise<GroupDto> {
    return this.groupRepository.findOne(id);
  }



  async findOnConditions(email: string): Promise<GroupDto> {
    return this.groupRepository.findOne({
       where: {
        email: email,
      }});
   
  }

  async login(email: string,password: string): Promise<GroupDto> {
    return this.groupRepository.findOne({
       where: {
        email: email,
        password: password,
      }});
   
  }





  async delete(id: string): Promise<GroupDto | null> {
    const user = await this.groupRepository.findOne(id);
    if (!user) return null;
    await this.groupRepository.delete(id)
    return user;
  }
}
