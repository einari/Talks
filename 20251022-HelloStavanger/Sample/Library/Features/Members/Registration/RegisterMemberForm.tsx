// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useState } from 'react';
import { RegisterMember } from './RegisterMember';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

export const RegisterMemberForm = () => {
    const command = new RegisterMember();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        command.firstName = firstName;
        command.lastName = lastName;

        try {
            await command.execute();
            setFirstName('');
            setLastName('');
        } catch (error) {
            console.error('Failed to register member:', error);
        }
    };

    return (
        <Card title="Register New Member" className="mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstName">First Name</label>
                    <InputText
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Last Name</label>
                    <InputText
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" label="Register Member" />
            </form>
        </Card>
    );
};
