// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Page } from 'Components/Common';
import { RegisterMemberForm } from './Registration/RegisterMemberForm';
import { MembersList } from './Listing/MembersList';

export const Members = () => {
    return (
        <Page title="Members">
            <RegisterMemberForm />
            <MembersList />
        </Page>
    );
};
