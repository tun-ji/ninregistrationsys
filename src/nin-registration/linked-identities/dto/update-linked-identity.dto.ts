import { PartialType } from '@nestjs/mapped-types';
import { CreateLinkedIdentityDto } from './create-linked-identity.dto';

export class UpdateLinkedIdentityDto extends PartialType(CreateLinkedIdentityDto) {}
