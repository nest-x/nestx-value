import { DynamicModule, Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { ValueExplorer } from './value.explorer';

@Module({
  imports: [DiscoveryModule]
})
export class ValueModule {
  static register(): DynamicModule {
    return {
      module: ValueModule,
      providers: [ValueExplorer]
    };
  }
}
