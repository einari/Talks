import { Collection, Db, MongoClient } from 'mongodb';
import { IDatabase } from './IDatabase';
import { Constructor } from './Constructor';
import { pluralize } from './CollectionNamePluralizer';

export class Database extends IDatabase {
    readonly _client: MongoClient;
    readonly _db: Db;

    constructor() {
        super();
        this._client = new MongoClient('mongodb://localhost:27017');
        this._db = this._client.db('TheSystem');
    }

    getCollectionFor<T extends Document>(type: Constructor<T>): Collection<T > {
        return this._db.collection<T>(pluralize(type.name));
    }
}