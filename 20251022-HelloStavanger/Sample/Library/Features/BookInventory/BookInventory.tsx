// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Page } from 'Components/Common';
import { AddBooksForm } from './Registration/AddBooksForm';
import { InventoryList } from './Listing/InventoryList';
import { AdjustInventoryForm } from './Adjustment/AdjustInventoryForm';

export const BookInventory = () => {
    return (
        <Page title="Book Inventory">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <AddBooksForm />
                <AdjustInventoryForm />
            </div>
            <InventoryList />
        </Page>
    );
};
