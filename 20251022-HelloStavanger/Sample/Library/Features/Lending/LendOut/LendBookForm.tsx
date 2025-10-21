// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useState } from 'react';
import { LendBook } from './LendBook';
import { AllInventoryItems } from '../../BookInventory/Listing/AllInventoryItems';
import { AllMembers } from '../../Members/Listing/AllMembers';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';

export const LendBookForm = () => {
    const command = new LendBook();
    const [inventory] = AllInventoryItems.use();
    const [members] = AllMembers.use();
    const [selectedISBN, setSelectedISBN] = useState('');
    const [selectedMemberId, setSelectedMemberId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        command.ISBN = selectedISBN;
        command.memberId = selectedMemberId as any;

        try {
            await command.execute();
            setSelectedISBN('');
            setSelectedMemberId('');
        } catch (error) {
            console.error('Failed to lend book:', error);
        }
    };

    const bookOptions = inventory.data
        .filter(item => item.availableCount > 0)
        .map(item => ({
            label: `${item.title} (${item.ISBN}) - Available: ${item.availableCount}`,
            value: item.ISBN
        }));

    const memberOptions = members.data.map(member => ({
        label: `${member.firstName} ${member.lastName}`,
        value: member.id
    }));

    return (
        <Card title="Lend Book" className="mb-4">
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
                    <label htmlFor="member">Member</label>
                    <Dropdown
                        id="member"
                        value={selectedMemberId}
                        onChange={(e) => setSelectedMemberId(e.value)}
                        options={memberOptions}
                        placeholder="Select a member"
                        filter
                        required
                    />
                </div>
                <Button type="submit" label="Lend Book" />
            </form>
        </Card>
    );
};
