import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkspaceDto } from 'src/workspace/dto/workspace.dto';
import { WorkspaceEntity } from 'src/workspace/entity/workspace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(WorkspaceEntity)
    private workspaceRepository: Repository<WorkspaceEntity>
  ){}

  async create(workspace: WorkspaceDto): Promise<WorkspaceDto> {
    return this.workspaceRepository.save(workspace);
  }

  async findAll(userID: string): Promise<WorkspaceDto[]> {
    return this.workspaceRepository.find({
      where: {
       user_id: userID,
     },
    order:{
      id:'ASC'
    }},
     );
  }

  async findOne(id: string): Promise<WorkspaceDto> {
    return this.workspaceRepository.findOne(id);
  }

  async getProfile(id: string): Promise<WorkspaceDto> {
    return this.workspaceRepository.findOne(id);
  }

  async getSessionworkspace(id: string): Promise<WorkspaceDto> {
    return this.workspaceRepository.findOne(id);
  }



  async findOnConditions(email: string): Promise<WorkspaceDto> {
    return this.workspaceRepository.findOne({
       where: {
        email: email,
      }});
   
  }

  async login(email: string,password: string): Promise<WorkspaceDto> {
    return this.workspaceRepository.findOne({
       where: {
        email: email,
        password: password,
      }});
   
  }





  async delete(id: string): Promise<WorkspaceDto | null> {
    const user = await this.workspaceRepository.findOne(id);
    if (!user) return null;
    await this.workspaceRepository.delete(id)
    return user;
  }
}
