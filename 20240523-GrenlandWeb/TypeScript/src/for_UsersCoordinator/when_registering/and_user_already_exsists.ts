import sinon from 'sinon';
import 'mocha';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { Guid } from '../../Guid';
import { a_users_coordinator } from '../given/a_users_coordinator';
import { RegisterUser } from '../../UsersCoordinator';
chai.use(sinonChai);

describe("when registering and user already exists", () => {
    let given: a_users_coordinator;

    let result: boolean;
    let userId = Guid.create();
    const registerUser: RegisterUser = {
        firstName: 'Jane',
        lastName: 'Doe',
        socialSecurityNumber: '123456789',
        userName: 'jane@doe.com',
        password: 'sEcReT',
    };

    beforeEach(async () => {
        given = new a_users_coordinator();
        given.usersService.register = sinon.stub().returns(userId);
        given.userDetailsService.register = sinon.stub();
        
        result = await given.usersCoordinator.register(registerUser);
    });

    it("should return true", () => result.should.be.true);
    it("should register user", () => given.usersService.register.should.have.been.calledOnceWith(registerUser.userName, registerUser.password));
    it("should register user details", () => given.userDetailsService.register.should.have.been.calledOnceWithExactly(userId, registerUser.firstName, registerUser.lastName, registerUser.socialSecurityNumber));
});
