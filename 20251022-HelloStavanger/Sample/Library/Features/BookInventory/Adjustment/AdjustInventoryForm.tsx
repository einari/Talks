// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useState } from 'react';
import { AdjustInventoryForLostBooks } from './AdjustInventoryForLostBooks';
import { AllInventoryItems } from '../Listing/AllInventoryItems';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';

export const AdjustInventoryForm = () => {
    const command = new AdjustInventoryForLostBooks();
    const [inventory] = AllInventoryItems.use();
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
            console.error('Failed to adjust inventory:', error);
        }
    };

    const inventoryOptions = inventory.data
        .filter(item => item.availableCount > 0)
        .map(item => ({
            label: `${item.title} (${item.ISBN}) - Available: ${item.availableCount}`,
            value: item.ISBN
        }));

    return (
        <Card title="Adjust Inventory for Lost Books" className="mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="book">Book</label>
                    <Dropdown
                        id="book"
                        value={selectedISBN}
                        onChange={(e) => setSelectedISBN(e.value)}
                        options={inventoryOptions}
                        placeholder="Select a book"
                        filter
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="count">Quantity Lost</label>
                    <InputNumber
                        id="count"
                        value={count}
                        onValueChange={(e) => setCount(e.value ?? 1)}
                        min={1}
                        showButtons
                        required
                    />
                </div>
                <Button type="submit" label="Adjust Inventory" severity="warning" />
            </form>
        </Card>
    );
};
