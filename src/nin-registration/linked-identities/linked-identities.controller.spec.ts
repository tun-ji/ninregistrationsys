import { Test, TestingModule } from '@nestjs/testing';
import { LinkedIdentitiesController } from './linked-identities.controller';
import { LinkedIdentitiesService } from './linked-identities.service';

describe('LinkedIdentitiesController', () => {
  let controller: LinkedIdentitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedIdentitiesController],
      providers: [LinkedIdentitiesService],
    }).compile();

    controller = module.get<LinkedIdentitiesController>(LinkedIdentitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
