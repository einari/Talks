/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { BookLent } from './BookLent';
import { Guid } from '@cratis/fundamentals';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/lending/lend-out');

export interface ILendBook {
    ISBN?: string;
    memberId?: Guid;
}

export class LendBookValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        ISBN: new Validator(),
        memberId: new Validator(),
    };
}

export class LendBook extends Command<ILendBook, BookLent> implements ILendBook {
    readonly route: string = '/api/lending/lend-out';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new LendBookValidator();

    private _ISBN!: string;
    private _memberId!: Guid;

    constructor() {
        super(BookLent, false);
    }

    get requestParameters(): string[] {
        return [
        ];
    }

    get properties(): string[] {
        return [
            'ISBN',
            'memberId',
        ];
    }

    get ISBN(): string {
        return this._ISBN;
    }

    set ISBN(value: string) {
        this._ISBN = value;
        this.propertyChanged('ISBN');
    }
    get memberId(): Guid {
        return this._memberId;
    }

    set memberId(value: Guid) {
        this._memberId = value;
        this.propertyChanged('memberId');
    }

    static use(initialValues?: ILendBook): [LendBook, SetCommandValues<ILendBook>, ClearCommandValues] {
        return useCommand<LendBook, ILendBook>(LendBook, initialValues);
    }
}
