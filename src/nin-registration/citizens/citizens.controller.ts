import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizensService: CitizensService) {}

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    console.log(JSON.stringify(createCitizenDto))
    return this.citizensService.create(createCitizenDto);
  }

  @Get('create')
  @Render('citizens/create-citizen')
  createForm(){}

  
  @Get('return')
  @Render('citizens/citizens')
  getRegistered(): {} {
    return {citizens: this.citizensService.findAll()}
    // console.log(citizens)
    // return citizens

  }

  @Get()
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

  @Patch(':citizenID/linked-identity/linked-identityID')
  setUserById(@Param('citizenID') citizenID: string, @Param('citizen-ID') LinkedIdentityID: string) {
    return this.citizensService.setCitizenbyId(+citizenID,+LinkedIdentityID);
  }

  @Delete(':citizenID/user')
  unsetUserById(@Param('citizenID') citizenID:string) {
    return this.citizensService.unsetCitizenbyId(+citizenID);
  }
}
