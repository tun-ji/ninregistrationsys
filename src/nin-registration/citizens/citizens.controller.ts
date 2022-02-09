import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizensService: CitizensService) {}

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    return this.citizensService.create(createCitizenDto);
  }

  @Get('create')
  @Render('citizens/create-citizen')
  createForm(){}

  @Get('all')
  findAll() {
    return this.citizensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizenDto) {
    return this.citizensService.update(+id, updateCitizenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizensService.remove(+id);
  }
}
