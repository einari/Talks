// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Page } from 'Components/Common';
import { LendBookForm } from './LendOut/LendBookForm';
import { LendingsList } from './Listing/LendingsList';

export const Lending = () => {
    return (
        <Page title="Book Lending">
            <LendBookForm />
            <LendingsList />
        </Page>
    );
};
