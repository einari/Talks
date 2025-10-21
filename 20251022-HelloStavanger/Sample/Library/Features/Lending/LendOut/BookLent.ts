/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { field } from '@cratis/fundamentals';
import { Guid } from '@cratis/fundamentals';

export class BookLent {

    @field(String)
    ISBN!: string;

    @field(Guid)
    memberId!: Guid;

    @field(Date)
    lentAt!: Date;
}
