/*---------------------------------------------------------------------------------------------
 *  **DO NOT EDIT** - This file is an automatically generated file.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable sort-imports */
// eslint-disable-next-line header/header
import { field } from '@cratis/fundamentals';
import { Guid } from '@cratis/fundamentals';

export class InventoryItem {

    @field(String)
    ISBN!: string;

    @field(String)
    title!: string;

    @field(Guid)
    authorId!: Guid;

    @field(Number)
    availableCount!: number;

    @field(Number)
    totalCount!: number;
}
