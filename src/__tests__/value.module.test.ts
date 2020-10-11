import { Test, TestingModule } from '@nestjs/testing';
import { ValueModule } from '../index';

describe('nestx-value', () => {
  it('# should import value module correctly', async (done) => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ValueModule]
    }).compile();

    const app = module.createNestApplication();
    await app.init();

    const valueModule = module.get(ValueModule);

    expect(valueModule).toBeInstanceOf(ValueModule);

    done();
  });
});
