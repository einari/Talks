// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useState } from 'react';
import { AddBooksToInventory } from './AddBooksToInventory';
import { AllBooks } from '../../BookCatalog/Listing/AllBooks';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';

export const AddBooksForm = () => {
    const command = new AddBooksToInventory();
    const [books] = AllBooks.use();
    const [selectedISBN, setSelectedISBN] = useState('');
    const [count, setCount] = useState<number>(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        command.ISBN = selectedISBN;
        command.count = count;

        try {
            await command.execute();
            setSelectedISBN('');
            setCount(1);
        } catch (error) {
            console.error('Failed to add books to inventory:', error);
        }
    };

    const bookOptions = books.data.map(book => ({
        label: `${book.title} (${book.ISBN})`,
        value: book.ISBN
    }));

    return (
        <Card title="Add Books to Inventory" className="mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="book">Book</label>
                    <Dropdown
                        id="book"
                        value={selectedISBN}
                        onChange={(e) => setSelectedISBN(e.value)}
                        options={bookOptions}
                        placeholder="Select a book"
                        filter
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="count">Quantity</label>
                    <InputNumber
                        id="count"
                        value={count}
                        onValueChange={(e) => setCount(e.value ?? 1)}
                        min={1}
                        showButtons
                        required
                    />
                </div>
                <Button type="submit" label="Add to Inventory" />
            </form>
        </Card>
    );
};
