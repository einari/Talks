import { Collection } from 'mongodb';
import { Constructor } from './Constructor';

export abstract class IDatabase {
    abstract getCollectionFor<T extends Document>(type: Constructor<T>): Collection<T>;
}

