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

  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    const newLinkedIdentity: LinkedIdentity = this.linkedIdentityRepository.create(createLinkedIdentityDto)
    return this.linkedIdentityRepository.save(newLinkedIdentity)
  }

  async findAll() {
    return await this.linkedIdentityRepository.find()
  }

  async findOne(id: number) {
    return await this.linkedIdentityRepository.findOne(id)
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return this.linkedIdentityRepository.update(id, updateLinkedIdentityDto)
  }

  async remove(id: number) {
    return await this.linkedIdentityRepository.delete(id)
  }
}
 