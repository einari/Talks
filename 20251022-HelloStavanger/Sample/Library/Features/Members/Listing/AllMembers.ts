/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { ObservableQueryFor, QueryResultWithState, Sorting, Paging } from '@cratis/applications/queries';
import { useObservableQuery, useObservableQueryWithPaging, SetSorting, SetPage, SetPageSize } from '@cratis/applications.react/queries';
import { Member } from './Member';
import Handlebars from 'handlebars';

const routeTemplate = Handlebars.compile('/api/members/listing/all-members');

class AllMembersSortBy {

    constructor(readonly query: AllMembers) {
    }

}

class AllMembersSortByWithoutQuery {

}

export class AllMembers extends ObservableQueryFor<Member[]> {
    readonly route: string = '/api/members/listing/all-members';
    readonly routeTemplate: Handlebars.TemplateDelegate = routeTemplate;
    readonly defaultValue: Member[] = [];
    private readonly _sortBy: AllMembersSortBy;
    private static readonly _sortBy: AllMembersSortByWithoutQuery = new AllMembersSortByWithoutQuery();

    constructor() {
        super(Member, true);
        this._sortBy = new AllMembersSortBy(this);
    }

    get requiredRequestParameters(): string[] {
        return [
        ];
    }

    get sortBy(): AllMembersSortBy {
        return this._sortBy;
    }

    static get sortBy(): AllMembersSortByWithoutQuery {
        return this._sortBy;
    }

    static use(sorting?: Sorting): [QueryResultWithState<Member[]>, SetSorting] {
        return useObservableQuery<Member[], AllMembers>(AllMembers, undefined, sorting);
    }

    static useWithPaging(pageSize: number, sorting?: Sorting): [QueryResultWithState<Member[]>, SetSorting, SetPage, SetPageSize] {
        return useObservableQueryWithPaging<Member[], AllMembers>(AllMembers, new Paging(0, pageSize), undefined, sorting);
    }
}
