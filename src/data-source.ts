import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';

const dataSourceConfig = (): DataSourceOptions => {

    const entitiesPath = path.join(__dirname, './entities/**.{ts, js}')
    const migrationsPath = path.join(__dirname, './migrations/**.{ts, js}')
    
    const dbUrl: string | undefined = process.env.DATABASE_URL
    const nodeEnv: string | undefined = process.env.NODE_ENV

    if(!dbUrl){
        throw new Error ('Missing send: DATABASE_URL.')
    }

    if(nodeEnv === 'test'){
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entitiesPath]
        }
    }

    return {
        type: 'postgres',
        url: dbUrl,
        synchronize: false,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiesPath]
    }
}

export const AppDataSource = new DataSource(dataSourceConfig())