import { IUsersService } from '../../IUsersService';
import { UsersCoordinator } from '../../UsersCoordinator';
import { IUserDetailsService } from '../../IUserDetailsService';
import sinon from 'sinon';

export class a_users_coordinator {
    readonly usersCoordinator: UsersCoordinator;
    readonly usersService: IUsersService;
    readonly userDetailsService: IUserDetailsService;

    constructor() {
        this.usersService = {
            exists: sinon.stub(),
            register: sinon.stub()
        }
        this.userDetailsService = {
            register: sinon.stub()
        }
        this.usersCoordinator = new UsersCoordinator(this.usersService, this.userDetailsService);
    }
}