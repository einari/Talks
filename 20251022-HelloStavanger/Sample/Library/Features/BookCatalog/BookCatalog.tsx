// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Page } from 'Components/Common';
import { RegisterBookForm } from './Registration/RegisterBookForm';
import { BooksList } from './Listing/BooksList';

export const BookCatalog = () => {
    return (
        <Page title="Book Catalog">
            <RegisterBookForm />
            <BooksList />
        </Page>
    );
};
