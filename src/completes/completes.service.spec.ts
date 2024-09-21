import { Test, TestingModule } from '@nestjs/testing';
import { CompletesService } from './completes.service';

describe('CompletesService', () => {
  let service: CompletesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompletesService],
    }).compile();

    service = module.get<CompletesService>(CompletesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
