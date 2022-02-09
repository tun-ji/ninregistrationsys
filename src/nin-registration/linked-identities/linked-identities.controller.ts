import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkedIdentitiesService } from './linked-identities.service';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';

@Controller('linked-identities')
export class LinkedIdentitiesController {
  constructor(private readonly linkedIdentitiesService: LinkedIdentitiesService) {}

  @Post()
  create(@Body() createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return this.linkedIdentitiesService.create(createLinkedIdentityDto);
  }

  @Get()
  findAll() {
    return this.linkedIdentitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkedIdentitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return this.linkedIdentitiesService.update(+id, updateLinkedIdentityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkedIdentitiesService.remove(+id);
  }
}
