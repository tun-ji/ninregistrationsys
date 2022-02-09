import { Module } from '@nestjs/common';
import { CitizensModule } from './citizens/citizens.module';
import { LinkedIdentitiesModule } from './linked-identities/linked-identities.module';

@Module({
  imports: [CitizensModule, LinkedIdentitiesModule]
})
export class NinRegistrationModule {}
