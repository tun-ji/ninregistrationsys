import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentitiesService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private linkedIdentityRepository: Repository<LinkedIdentity>
  ){}

  create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return 'This action adds a new linkedIdentity';
  }

  findAll() {
    return `This action returns all linkedIdentities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkedIdentity`;
  }

  update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return `This action updates a #${id} linkedIdentity`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkedIdentity`;
  }
}
