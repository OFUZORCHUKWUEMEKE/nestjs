import { DynamicModule, Module } from '@nestjs/common';
import { createConnection } from 'net';
import { ConnectOptions, DataSourceOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
    // static register(options: DataSourceOptions): DynamicModule {
    //     return {
    //         module: DatabaseModule,
    //         providers: [
    //             { provide: 'CONNECTION', useValue: createConnection(options) }
    //         ]
    //     }
    // }
}
