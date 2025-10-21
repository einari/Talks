/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { MemberRegistered } from './MemberRegistered';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/members/registration');

export interface IRegisterMember {
    firstName?: string;
    lastName?: string;
}

export class RegisterMemberValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        firstName: new Validator(),
        lastName: new Validator(),
    };
}

export class RegisterMember extends Command<IRegisterMember, MemberRegistered> implements IRegisterMember {
    readonly route: string = '/api/members/registration';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new RegisterMemberValidator();

    private _firstName!: string;
    private _lastName!: string;

    constructor() {
        super(MemberRegistered, false);
    }

    get requestParameters(): string[] {
        return [
        ];
    }

    get properties(): string[] {
        return [
            'firstName',
            'lastName',
        ];
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
        this.propertyChanged('firstName');
    }
    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
        this.propertyChanged('lastName');
    }

    static use(initialValues?: IRegisterMember): [RegisterMember, SetCommandValues<IRegisterMember>, ClearCommandValues] {
        return useCommand<RegisterMember, IRegisterMember>(RegisterMember, initialValues);
    }
}
