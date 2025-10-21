// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { AllMembers } from './AllMembers';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

export const MembersList = () => {
    const [result] = AllMembers.use();

    return (
        <Card title="Members">
            <DataTable value={result.data}>
                <Column field="firstName" header="First Name" />
                <Column field="lastName" header="Last Name" />
            </DataTable>
        </Card>
    );
};
