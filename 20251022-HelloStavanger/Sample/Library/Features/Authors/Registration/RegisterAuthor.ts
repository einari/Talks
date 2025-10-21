/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { AuthorRegistered } from './AuthorRegistered';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/authors/registration');

export interface IRegisterAuthor {
    firstName?: string;
    lastName?: string;
}

export class RegisterAuthorValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        firstName: new Validator(),
        lastName: new Validator(),
    };
}

export class RegisterAuthor extends Command<IRegisterAuthor, AuthorRegistered> implements IRegisterAuthor {
    readonly route: string = '/api/authors/registration';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new RegisterAuthorValidator();

    private _firstName!: string;
    private _lastName!: string;

    constructor() {
        super(AuthorRegistered, false);
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

    static use(initialValues?: IRegisterAuthor): [RegisterAuthor, SetCommandValues<IRegisterAuthor>, ClearCommandValues] {
        return useCommand<RegisterAuthor, IRegisterAuthor>(RegisterAuthor, initialValues);
    }
}
