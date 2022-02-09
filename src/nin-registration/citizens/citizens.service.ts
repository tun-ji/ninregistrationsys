import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LinkedIdentity } from '../linked-identities/entities/linked-identity.entity';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';

@Injectable()
export class CitizensService {
  constructor(
    @InjectRepository(Citizen)
    private citizenRepository: Repository <Citizen>,

    @InjectRepository(LinkedIdentity)
    private linkedIdentityRepository: Repository <LinkedIdentity>
  ){}

  async create(createCitizenDto: CreateCitizenDto) {
    const newCit: Citizen = this.citizenRepository.create(createCitizenDto)

    if (createCitizenDto.linkedIdentity){
      const newLinkedIdentity = this.linkedIdentityRepository.create(createCitizenDto.linkedIdentity)
      const linkedIdentity: LinkedIdentity = await this.linkedIdentityRepository.save(newLinkedIdentity)

      newCit.linkedIdentity = linkedIdentity
    }
    return this.citizenRepository.save(newCit)
  }

  async findAll() {
    return await this.citizenRepository.find()
  }

  async findOne(id: number) {
    return await this.citizenRepository.findOne(id);
  }

  async update(id: number, updateCitizenDto: UpdateCitizenDto) {
    return await this.citizenRepository.update(id, updateCitizenDto)
  }

  async remove(id: number) {
    return await this.citizenRepository.delete(id)
  }

  async setCitizenbyId(citizenId: number, linkedIdentityID: number) {
    try {
      return await this.citizenRepository.createQueryBuilder()
      .relation(Citizen, "linkedIdentity")
      .of(citizenId)
      .set(linkedIdentityID)
    }
  }
}
