import { Test, TestingModule } from '@nestjs/testing';
import { CitizensService } from './citizens.service';

describe('CitizensService', () => {
  let service: CitizensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizensService],
    }).compile();

    service = module.get<CitizensService>(CitizensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
