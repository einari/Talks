/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { field } from '@cratis/fundamentals';
import { Guid } from '@cratis/fundamentals';

export class BookReservationItem {

    @field(Guid)
    id!: Guid;

    @field(String)
    ISBN!: string;

    @field(String)
    title!: string;

    @field(Guid)
    memberId!: Guid;

    @field(String)
    memberFirstName!: string;

    @field(String)
    memberLastName!: string;
}
