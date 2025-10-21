// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { AllLendings } from './AllLendings';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

export const LendingsList = () => {
    const [result] = AllLendings.use();

    const dateTemplate = (row: any) => {
        return new Date(row.lentAt).toLocaleDateString();
    };

    return (
        <Card title="Books Lent Out">
            <DataTable value={result.data}>
                <Column field="title" header="Book Title" />
                <Column field="ISBN" header="ISBN" />
                <Column
                    header="Member"
                    body={(row) => `${row.memberFirstName} ${row.memberLastName}`}
                />
                <Column header="Lent On" body={dateTemplate} />
            </DataTable>
        </Card>
    );
};
