import sinon from 'sinon';
import 'mocha';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { a_users_coordinator } from '../given/a_users_coordinator';
chai.use(sinonChai);

describe("when registering and user already exists", () => {
    let given: a_users_coordinator;

    let result: boolean;

    beforeEach(async () => {
        given = new a_users_coordinator();
        given.usersService.exists = sinon.stub().returns(true);

        result = await given.usersCoordinator.register({
            firstName: "Jane",
            lastName: "Doe",
            socialSecurityNumber: "123456789",
            userName: "jane@doe.com",
            password: "sEcReT",
        });
    });

    it("should return false", () => result.should.be.false);
    it("should not register user", () => given.usersService.register.should.not.have.been.called);
    it("should not register user details", () => given.userDetailsService.register.should.not.have.been.called);
});
