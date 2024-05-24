import { Guid } from './Guid';



export class UserDetails extends Document {
    id: Guid;
    firstName: string;
    lastName: string;
    socialSecurityNumber: string;

    constructor() {
        super();
        this.id = Guid.create();
        this.firstName = '';
        this.lastName = '';
        this.socialSecurityNumber = '';
    }
}
