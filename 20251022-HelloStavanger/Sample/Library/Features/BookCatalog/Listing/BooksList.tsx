// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { AllBooks } from './AllBooks';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Book } from './Book';

export const BooksList = () => {
    const [result] = AllBooks.use();

    const tagsTemplate = (book: Book) => {
        return (
            <div className="flex gap-2 flex-wrap">
                {book.tags.map((tag, index) => (
                    <Tag key={index} value={tag} />
                ))}
            </div>
        );
    };

    return (
        <Card title="Book Catalog">
            <DataTable value={result.data}>
                <Column field="isbn" header="ISBN" />
                <Column field="title" header="Title" />
                <Column body={tagsTemplate} header="Tags" />
            </DataTable>
        </Card>
    );
};
