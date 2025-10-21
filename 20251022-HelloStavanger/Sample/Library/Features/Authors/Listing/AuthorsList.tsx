// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { AllAuthors } from './AllAuthors';
import { RemoveAuthor } from '../Removal/RemoveAuthor';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Author } from './Author';

export const AuthorsList = () => {
    const [result] = AllAuthors.use();

    const handleDelete = async (author: Author) => {
        const command = new RemoveAuthor();
        command.authorId = author.id;

        try {
            await command.execute();
        } catch (error) {
            console.error('Failed to remove author:', error);
        }
    };

    const actionTemplate = (author: Author) => {
        return (
            <Button
                icon="pi pi-trash"
                className="p-button-danger p-button-sm"
                onClick={() => handleDelete(author)}
            />
        );
    };

    return (
        <Card title="Authors">
            <DataTable value={result.data}>
                <Column field="firstName" header="First Name" />
                <Column field="lastName" header="Last Name" />
                <Column body={actionTemplate} header="Actions" style={{ width: '100px' }} />
            </DataTable>
        </Card>
    );
};
