import { Test, TestingModule } from '@nestjs/testing';
import { LinkedIdentitiesService } from './linked-identities.service';

describe('LinkedIdentitiesService', () => {
  let service: LinkedIdentitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedIdentitiesService],
    }).compile();

    service = module.get<LinkedIdentitiesService>(LinkedIdentitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
