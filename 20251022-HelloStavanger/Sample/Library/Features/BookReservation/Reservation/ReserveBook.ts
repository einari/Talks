/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { BookReserved } from './BookReserved';
import { Guid } from '@cratis/fundamentals';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-reservation/reservation');

export interface IReserveBook {
    ISBN?: string;
    memberId?: Guid;
}

export class ReserveBookValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        ISBN: new Validator(),
        memberId: new Validator(),
    };
}

export class ReserveBook extends Command<IReserveBook, BookReserved> implements IReserveBook {
    readonly route: string = '/api/book-reservation/reservation';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new ReserveBookValidator();

    private _ISBN!: string;
    private _memberId!: Guid;

    constructor() {
        super(BookReserved, false);
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

    static use(initialValues?: IReserveBook): [ReserveBook, SetCommandValues<IReserveBook>, ClearCommandValues] {
        return useCommand<ReserveBook, IReserveBook>(ReserveBook, initialValues);
    }
}
