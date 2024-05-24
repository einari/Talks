import { IUserDetailsService } from './IUserDetailsService';
import { IUsersService } from './IUsersService';


export type RegisterUser = {
    firstName: string,
    lastName: string,
    socialSecurityNumber: string,
    userName: string,
    password: string,
};

export class UsersCoordinator {
    constructor(readonly _usersService: IUsersService, readonly _userDetailsService: IUserDetailsService) {

    }

    async register(user: RegisterUser): Promise<boolean> {
        if (await this._usersService.exists(user.userName) === true) {
            return false;
        }

        const id = await this._usersService.register(user.userName, user.password);
        await this._userDetailsService.register(id, user.firstName, user.lastName, user.socialSecurityNumber);

        return true;
    }
}