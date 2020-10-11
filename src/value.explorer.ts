import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, ModuleRef } from '@nestjs/core';
import { PROPERTY_SOURCE_TOKEN, VALUE_TOKEN } from './value.constants';

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
    this.registerPropertySourceAndValueDecorators();
  }

  registerPropertySourceAndValueDecorators() {
    const providers = this.discoveryService.getProviders();
    const providersWithDecorators = providers
      .filter((provider) => provider && provider.metatype)
      .filter((provider) => {
        const isPropertySourceUndefined = Reflect.getMetadata(PROPERTY_SOURCE_TOKEN, provider.metatype) === undefined;
        return !isPropertySourceUndefined;
      });

    for(const provider of providersWithDecorators){
      const propertySourceName = Reflect.getMetadata(PROPERTY_SOURCE_TOKEN, provider);
      // const injectPropertySourceToken

    }


    this.logger.log(`Discovered ${providersWithDecorators.length} providers`);
  }


}
