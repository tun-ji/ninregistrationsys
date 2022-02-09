import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensController } from './citizens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from './entities/citizen.entity';
import { LinkedIdentity } from '../linked-identities/entities/linked-identity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citizen, LinkedIdentity])],
  controllers: [CitizensController],
  providers: [CitizensService]
})
export class CitizensModule {}
