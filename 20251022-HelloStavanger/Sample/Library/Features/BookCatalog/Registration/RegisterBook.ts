/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { BookRegistered } from './BookRegistered';
import { Guid } from '@cratis/fundamentals';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-catalog/registration');

export interface IRegisterBook {
    ISBN?: string;
    title?: string;
    authorId?: Guid;
    tags?: string[];
}

export class RegisterBookValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        ISBN: new Validator(),
        title: new Validator(),
        authorId: new Validator(),
        tags: new Validator(),
    };
}

export class RegisterBook extends Command<IRegisterBook, BookRegistered> implements IRegisterBook {
    readonly route: string = '/api/book-catalog/registration';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new RegisterBookValidator();

    private _ISBN!: string;
    private _title!: string;
    private _authorId!: Guid;
    private _tags!: string[];

    constructor() {
        super(BookRegistered, false);
    }

    get requestParameters(): string[] {
        return [
        ];
    }

    get properties(): string[] {
        return [
            'ISBN',
            'title',
            'authorId',
            'tags',
        ];
    }

    get ISBN(): string {
        return this._ISBN;
    }

    set ISBN(value: string) {
        this._ISBN = value;
        this.propertyChanged('ISBN');
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
        this.propertyChanged('title');
    }
    get authorId(): Guid {
        return this._authorId;
    }

    set authorId(value: Guid) {
        this._authorId = value;
        this.propertyChanged('authorId');
    }
    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
        this.propertyChanged('tags');
    }

    static use(initialValues?: IRegisterBook): [RegisterBook, SetCommandValues<IRegisterBook>, ClearCommandValues] {
        return useCommand<RegisterBook, IRegisterBook>(RegisterBook, initialValues);
    }
}
