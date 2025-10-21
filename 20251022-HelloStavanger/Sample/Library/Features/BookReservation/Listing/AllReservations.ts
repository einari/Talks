/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { ObservableQueryFor, QueryResultWithState, Sorting, Paging } from '@cratis/applications/queries';
import { useObservableQuery, useObservableQueryWithPaging, SetSorting, SetPage, SetPageSize } from '@cratis/applications.react/queries';
import { BookReservationItem } from './BookReservationItem';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/book-reservation/listing/all-reservations');

class AllReservationsSortBy {

    constructor(readonly query: AllReservations) {
    }

}

class AllReservationsSortByWithoutQuery {

}

export class AllReservations extends ObservableQueryFor<BookReservationItem[]> {
    readonly route: string = '/api/book-reservation/listing/all-reservations';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly defaultValue: BookReservationItem[] = [];
    private readonly _sortBy: AllReservationsSortBy;
    private static readonly _sortBy: AllReservationsSortByWithoutQuery = new AllReservationsSortByWithoutQuery();

    constructor() {
        super(BookReservationItem, true);
        this._sortBy = new AllReservationsSortBy(this);
    }

    get requiredRequestParameters(): string[] {
        return [
        ];
    }

    get sortBy(): AllReservationsSortBy {
        return this._sortBy;
    }

    static get sortBy(): AllReservationsSortByWithoutQuery {
        return this._sortBy;
    }

    static use(sorting?: Sorting): [QueryResultWithState<BookReservationItem[]>, SetSorting] {
        return useObservableQuery<BookReservationItem[], AllReservations>(AllReservations, undefined, sorting);
    }

    static useWithPaging(pageSize: number, sorting?: Sorting): [QueryResultWithState<BookReservationItem[]>, SetSorting, SetPage, SetPageSize] {
        return useObservableQueryWithPaging<BookReservationItem[], AllReservations>(AllReservations, new Paging(0, pageSize), undefined, sorting);
    }
}
