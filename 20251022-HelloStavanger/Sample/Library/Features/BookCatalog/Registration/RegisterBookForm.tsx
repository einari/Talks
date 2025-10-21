// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useState } from 'react';
import { RegisterBook } from './RegisterBook';
import { AllAuthors } from '../../Authors/Listing/AllAuthors';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Chips } from 'primereact/chips';
import { Card } from 'primereact/card';

export const RegisterBookForm = () => {
    const command = new RegisterBook();
    const [authors] = AllAuthors.use();
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [selectedAuthorId, setSelectedAuthorId] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        command.ISBN = isbn;
        command.title = title;
        command.authorId = selectedAuthorId as any;
        command.tags = tags;

        try {
            await command.execute();
            setIsbn('');
            setTitle('');
            setSelectedAuthorId('');
            setTags([]);
        } catch (error) {
            console.error('Failed to register book:', error);
        }
    };

    const authorOptions = authors.data.map(author => ({
        label: `${author.firstName} ${author.lastName}`,
        value: author.id
    }));

    return (
        <Card title="Register New Book" className="mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="isbn">ISBN</label>
                    <InputText
                        id="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">Title</label>
                    <InputText
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="author">Author</label>
                    <Dropdown
                        id="author"
                        value={selectedAuthorId}
                        onChange={(e) => setSelectedAuthorId(e.value)}
                        options={authorOptions}
                        placeholder="Select an author"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="tags">Tags</label>
                    <Chips
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.value ?? [])}
                        placeholder="Add tags"
                    />
                </div>
                <Button type="submit" label="Register Book" />
            </form>
        </Card>
    );
};
