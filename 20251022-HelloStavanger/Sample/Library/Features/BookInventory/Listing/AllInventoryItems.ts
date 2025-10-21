/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { ObservableQueryFor, QueryResultWithState, Sorting, Paging } from '@cratis/applications/queries';
import { useObservableQuery, useObservableQueryWithPaging, SetSorting, SetPage, SetPageSize } from '@cratis/applications.react/queries';
import { InventoryItem } from './InventoryItem';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-inventory/listing/all-inventory-items');

class AllInventoryItemsSortBy {

    constructor(readonly query: AllInventoryItems) {
    }

}

class AllInventoryItemsSortByWithoutQuery {

}

export class AllInventoryItems extends ObservableQueryFor<InventoryItem[]> {
    readonly route: string = '/api/book-inventory/listing/all-inventory-items';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly defaultValue: InventoryItem[] = [];
    private readonly _sortBy: AllInventoryItemsSortBy;
    private static readonly _sortBy: AllInventoryItemsSortByWithoutQuery = new AllInventoryItemsSortByWithoutQuery();

    constructor() {
        super(InventoryItem, true);
        this._sortBy = new AllInventoryItemsSortBy(this);
    }

    get requiredRequestParameters(): string[] {
        return [
        ];
    }

    get sortBy(): AllInventoryItemsSortBy {
        return this._sortBy;
    }

    static get sortBy(): AllInventoryItemsSortByWithoutQuery {
        return this._sortBy;
    }

    static use(sorting?: Sorting): [QueryResultWithState<InventoryItem[]>, SetSorting] {
        return useObservableQuery<InventoryItem[], AllInventoryItems>(AllInventoryItems, undefined, sorting);
    }

    static useWithPaging(pageSize: number, sorting?: Sorting): [QueryResultWithState<InventoryItem[]>, SetSorting, SetPage, SetPageSize] {
        return useObservableQueryWithPaging<InventoryItem[], AllInventoryItems>(AllInventoryItems, new Paging(0, pageSize), undefined, sorting);
    }
}
