import { Guid } from './Guid';
import { IDatabase } from './IDatabase';
import { IUsersService } from './IUsersService';
import { User } from './User';

export class UsersService extends IUsersService {

    constructor(readonly _database: IDatabase) {
        super();
    }

    async exists(username: string): Promise<boolean> {
        const user = await this._database.getCollectionFor(User).findOne({ username: username });
        return user !== null;
    }

    async register(username: string, password: string): Promise<Guid> {

        const id = Guid.create();
        await this._database.getCollectionFor(User).insertOne({ id, username, password } as any);
        return id;
    }
}