import { Guid } from './Guid';

export abstract class IUserDetailsService {
    abstract register(userId: Guid, firstName: string, lastName: string, socialSecurityNumber: string): Promise<void>;
}
