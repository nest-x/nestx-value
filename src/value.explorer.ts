import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, ModuleRef } from '@nestjs/core';
import { VALUE_TOKEN } from './value.constants';

@Injectable()
export class ValueExplorer implements OnModuleInit {
  private readonly logger = new Logger(ValueExplorer.name);

  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly metadataScanner: MetadataScanner,
    private readonly discoveryService: DiscoveryService
  ) {
    this.logger.log('Create ValueExplorer instances.');
  }

  onModuleInit(): any {
    this.registerValueDecorators();
  }

  registerValueDecorators() {
    const providers = this.discoveryService.getProviders();
    const providersWithValueDecorators = providers
      .filter((provider) => provider && provider.metatype)
      .filter((provider) => {
        const isKeyUndefined = Reflect.getMetadata(VALUE_TOKEN, provider.metatype) === undefined;
        return !isKeyUndefined;
      });

    this.logger.log(`Discovered ${providersWithValueDecorators.length} providers`);
  }
}
