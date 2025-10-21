// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Page } from 'Components/Common';
import { RegisterAuthorForm } from './Registration/RegisterAuthorForm';
import { AuthorsList } from './Listing/AuthorsList';

export const Authors = () => {
    return (
        <Page title="Authors">
            <RegisterAuthorForm />
            <AuthorsList />
        </Page>
    );
};
