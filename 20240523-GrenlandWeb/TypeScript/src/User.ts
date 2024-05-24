import { Guid } from './Guid';

export class User extends Document {
    id: Guid;
    username: string;
    password: string;

    constructor() {
        super();
        this.id = Guid.create();
        this.username = '';
        this.password = '';
    }
}


