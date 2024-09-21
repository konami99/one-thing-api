import { Test, TestingModule } from '@nestjs/testing';
import { CompletesController } from './completes.controller';
import { CompletesService } from './completes.service';

describe('CompletesController', () => {
  let controller: CompletesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompletesController],
      providers: [CompletesService],
    }).compile();

    controller = module.get<CompletesController>(CompletesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
