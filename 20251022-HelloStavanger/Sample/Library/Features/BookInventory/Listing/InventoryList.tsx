// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { AllInventoryItems } from './AllInventoryItems';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

export const InventoryList = () => {
    const [result] = AllInventoryItems.use();

    return (
        <Card title="Inventory">
            <DataTable value={result.data}>
                <Column field="isbn" header="ISBN" />
                <Column field="title" header="Title" />
                <Column field="availableCount" header="Available" />
                <Column field="totalCount" header="Total" />
            </DataTable>
        </Card>
    );
};
