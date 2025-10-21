/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { field } from '@cratis/fundamentals';
import { Guid } from '@cratis/fundamentals';

export class BookRegistered {

    @field(String)
    title!: string;

    @field(Guid)
    authorId!: Guid;

    @field(String, true)
    tags!: string[];
}
