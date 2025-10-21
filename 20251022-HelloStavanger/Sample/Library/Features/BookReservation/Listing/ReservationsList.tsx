// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { AllReservations } from './AllReservations';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

export const ReservationsList = () => {
    const [result] = AllReservations.use();

    return (
        <Card title="Book Reservations">
            <DataTable value={result.data}>
                <Column field="title" header="Book Title" />
                <Column field="ISBN" header="ISBN" />
                <Column
                    header="Member"
                    body={(row) => `${row.memberFirstName} ${row.memberLastName}`}
                />
            </DataTable>
        </Card>
    );
};
