/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line header/header
import { Command, CommandPropertyValidators, CommandValidator } from '@cratis/applications/commands';
import { useCommand, SetCommandValues, ClearCommandValues } from '@cratis/applications.react/commands';
import { Validator } from '@cratis/applications/validation';
import { InventoryAdjustedForLostBooks } from './InventoryAdjustedForLostBooks';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-inventory/adjustment');

export interface IAdjustInventoryForLostBooks {
    ISBN?: string;
    count?: number;
}

export class AdjustInventoryForLostBooksValidator extends CommandValidator {
    readonly properties: CommandPropertyValidators = {
        ISBN: new Validator(),
        count: new Validator(),
    };
}

export class AdjustInventoryForLostBooks extends Command<IAdjustInventoryForLostBooks, InventoryAdjustedForLostBooks> implements IAdjustInventoryForLostBooks {
    readonly route: string = '/api/book-inventory/adjustment';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly validation: CommandValidator = new AdjustInventoryForLostBooksValidator();

    private _ISBN!: string;
    private _count!: number;

    constructor() {
        super(InventoryAdjustedForLostBooks, false);
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

    static use(initialValues?: IAdjustInventoryForLostBooks): [AdjustInventoryForLostBooks, SetCommandValues<IAdjustInventoryForLostBooks>, ClearCommandValues] {
        return useCommand<AdjustInventoryForLostBooks, IAdjustInventoryForLostBooks>(AdjustInventoryForLostBooks, initialValues);
    }
}
