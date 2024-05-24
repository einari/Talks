import { Guid } from './Guid';

export abstract class IUsersService {
 
    abstract exists(username: string): Promise<boolean>;

    abstract register(username: string, password: string): Promise<Guid>;
}

