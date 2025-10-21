/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { ObservableQueryFor, QueryResultWithState, Sorting, Paging } from '@cratis/applications/queries';
import { useObservableQuery, useObservableQueryWithPaging, SetSorting, SetPage, SetPageSize } from '@cratis/applications.react/queries';
import { LendingItem } from './LendingItem';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/lending/listing/all-lendings');

class AllLendingsSortBy {

    constructor(readonly query: AllLendings) {
    }

}

class AllLendingsSortByWithoutQuery {

}

export class AllLendings extends ObservableQueryFor<LendingItem[]> {
    readonly route: string = '/api/lending/listing/all-lendings';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly defaultValue: LendingItem[] = [];
    private readonly _sortBy: AllLendingsSortBy;
    private static readonly _sortBy: AllLendingsSortByWithoutQuery = new AllLendingsSortByWithoutQuery();

    constructor() {
        super(LendingItem, true);
        this._sortBy = new AllLendingsSortBy(this);
    }

    get requiredRequestParameters(): string[] {
        return [
        ];
    }

    get sortBy(): AllLendingsSortBy {
        return this._sortBy;
    }

    static get sortBy(): AllLendingsSortByWithoutQuery {
        return this._sortBy;
    }

    static use(sorting?: Sorting): [QueryResultWithState<LendingItem[]>, SetSorting] {
        return useObservableQuery<LendingItem[], AllLendings>(AllLendings, undefined, sorting);
    }

    static useWithPaging(pageSize: number, sorting?: Sorting): [QueryResultWithState<LendingItem[]>, SetSorting, SetPage, SetPageSize] {
        return useObservableQueryWithPaging<LendingItem[], AllLendings>(AllLendings, new Paging(0, pageSize), undefined, sorting);
    }
}
