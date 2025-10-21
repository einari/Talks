/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { BooksAddedToInventory } from './BooksAddedToInventory';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-inventory/registration');

export interface IAddBooksToInventory {
    ISBN?: string;
    count?: number;
}

export class AddBooksToInventoryValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        ISBN: new Validator(),
        count: new Validator(),
    };
}

export class AddBooksToInventory extends Command<IAddBooksToInventory, BooksAddedToInventory> implements IAddBooksToInventory {
    readonly route: string = '/api/book-inventory/registration';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new AddBooksToInventoryValidator();

    private _ISBN!: string;
    private _count!: number;

    constructor() {
        super(BooksAddedToInventory, false);
    }

    get requestParameters(): string[] {
        return [
        ];
    }

    get properties(): string[] {
        return [
            'ISBN',
            'count',
        ];
    }

    get ISBN(): string {
        return this._ISBN;
    }

    set ISBN(value: string) {
        this._ISBN = value;
        this.propertyChanged('ISBN');
    }
    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
        this.propertyChanged('count');
    }

    static use(initialValues?: IAddBooksToInventory): [AddBooksToInventory, SetCommandValues<IAddBooksToInventory>, ClearCommandValues] {
        return useCommand<AddBooksToInventory, IAddBooksToInventory>(AddBooksToInventory, initialValues);
    }
}
