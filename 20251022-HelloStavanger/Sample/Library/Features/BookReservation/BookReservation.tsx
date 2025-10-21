// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Page } from 'Components/Common';
import { ReserveBookForm } from './Reservation/ReserveBookForm';
import { ReservationsList } from './Listing/ReservationsList';

export const BookReservation = () => {
    return (
        <Page title="Book Reservations">
            <ReserveBookForm />
            <ReservationsList />
        </Page>
    );
};
