import { Module } from '@nestjs/common';
import { LinkedIdentitiesService } from './linked-identities.service';
import { LinkedIdentitiesController } from './linked-identities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentity])],
  controllers: [LinkedIdentitiesController],
  providers: [LinkedIdentitiesService]
})
export class LinkedIdentitiesModule {}
