import { Guid } from './Guid';
import { IDatabase } from './IDatabase';
import { IUserDetailsService } from './IUserDetailsService';
import { UserDetails } from './UserDetails';

export class UserDetailsService extends IUserDetailsService {
    constructor(readonly _database: IDatabase) {
        super();
    }

    async register(userId: Guid, firstName: string, lastName: string, socialSecurityNumber: string): Promise<void> {
        await this._database.getCollectionFor(UserDetails).insertOne({ id: userId, firstName, lastName, socialSecurityNumber } as any);
    }
}
