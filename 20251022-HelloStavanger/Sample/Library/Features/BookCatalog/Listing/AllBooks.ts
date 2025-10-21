/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { ObservableQueryFor, QueryResultWithState, Sorting, Paging } from '@cratis/applications/queries';
import { useObservableQuery, useObservableQueryWithPaging, SetSorting, SetPage, SetPageSize } from '@cratis/applications.react/queries';
import { Book } from './Book';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-catalog/listing/all-books');

class AllBooksSortBy {

    constructor(readonly query: AllBooks) {
    }

}

class AllBooksSortByWithoutQuery {

}

export class AllBooks extends ObservableQueryFor<Book[]> {
    readonly route: string = '/api/book-catalog/listing/all-books';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly defaultValue: Book[] = [];
    private readonly _sortBy: AllBooksSortBy;
    private static readonly _sortBy: AllBooksSortByWithoutQuery = new AllBooksSortByWithoutQuery();

    constructor() {
        super(Book, true);
        this._sortBy = new AllBooksSortBy(this);
    }

    get requiredRequestParameters(): string[] {
        return [
        ];
    }

    get sortBy(): AllBooksSortBy {
        return this._sortBy;
    }

    static get sortBy(): AllBooksSortByWithoutQuery {
        return this._sortBy;
    }

    static use(sorting?: Sorting): [QueryResultWithState<Book[]>, SetSorting] {
        return useObservableQuery<Book[], AllBooks>(AllBooks, undefined, sorting);
    }

    static useWithPaging(pageSize: number, sorting?: Sorting): [QueryResultWithState<Book[]>, SetSorting, SetPage, SetPageSize] {
        return useObservableQueryWithPaging<Book[], AllBooks>(AllBooks, new Paging(0, pageSize), undefined, sorting);
    }
}
