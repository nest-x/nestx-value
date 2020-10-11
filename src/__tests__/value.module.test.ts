import * as log4js from 'log4js';
import { Test, TestingModule } from '@nestjs/testing';
import { Value } from '../decoractors/value';
import { ValueModule } from '../value.module';
import { DEFAULT_LOG4JS_OPTIONS, Log4jsLogger, Log4jsModule } from '@nestx-log4js/core';
import { Injectable } from '@nestjs/common';
import { PropertySource } from '../decoractors/property-source';

describe('nestx-value', () => {
  const testingLogger = new Log4jsLogger(log4js.configure(DEFAULT_LOG4JS_OPTIONS.config).getLogger());

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

  it('# should explorer scan all @PropertySource decorators', async (done) => {
    @PropertySource()
    @Injectable()
    class CustomPropertySource {}

    const module: TestingModule = await Test.createTestingModule({
      imports: [Log4jsModule.forRoot(), ValueModule.register()],
      providers: [CustomPropertySource]
    }).compile();


    const app = module.createNestApplication(null, {
      logger: testingLogger
    });

    app.useLogger(testingLogger);
    await app.init();

    const valueModule = module.get(ValueModule);

    expect(valueModule).toBeInstanceOf(ValueModule);


    done();
  });

  it('# should explorer scan all @Value decorators', async (done) => {
    @Injectable()
    class CustomKeyValue {
      @Value('')
      static SAMPLE_KEY;
    }

    const module: TestingModule = await Test.createTestingModule({
      imports: [Log4jsModule.forRoot(), ValueModule.register()],
      providers: [CustomKeyValue]
    }).compile();

    const app = module.createNestApplication(null, {
      logger: testingLogger
    });

    app.useLogger(testingLogger);
    await app.init();

    const valueModule = module.get(ValueModule);

    expect(valueModule).toBeInstanceOf(ValueModule);

    done();
  });
});
