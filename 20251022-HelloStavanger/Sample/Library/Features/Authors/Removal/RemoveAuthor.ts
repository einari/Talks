/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { AuthorRemoved } from './AuthorRemoved';
import { Guid } from '@cratis/fundamentals';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/authors/removal');

export interface IRemoveAuthor {
    authorId?: Guid;
}

export class RemoveAuthorValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        authorId: new Validator(),
    };
}

export class RemoveAuthor extends Command<IRemoveAuthor, AuthorRemoved> implements IRemoveAuthor {
    readonly route: string = '/api/authors/removal';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new RemoveAuthorValidator();

    private _authorId!: Guid;

    constructor() {
        super(AuthorRemoved, false);
    }

    get requestParameters(): string[] {
        return [
        ];
    }

    get properties(): string[] {
        return [
            'authorId',
        ];
    }

    get authorId(): Guid {
        return this._authorId;
    }

    set authorId(value: Guid) {
        this._authorId = value;
        this.propertyChanged('authorId');
    }

    static use(initialValues?: IRemoveAuthor): [RemoveAuthor, SetCommandValues<IRemoveAuthor>, ClearCommandValues] {
        return useCommand<RemoveAuthor, IRemoveAuthor>(RemoveAuthor, initialValues);
    }
}
