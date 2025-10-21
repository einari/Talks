// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useTheme } from './Utils/useTheme';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LayoutProvider } from './Layout/Default/context/LayoutContext';
import { DialogComponents } from '@cratis/applications.react/dialogs';
import { BusyIndicatorDialog, ConfirmationDialog } from 'Components/Dialogs';
import { DefaultLayout } from './Layout/Default/DefaultLayout';
import { IMenuItemGroup } from './Layout/Default/Sidebar/MenuItem/MenuItem';
import { Home } from './Home';
import { Authors } from './Features/Authors/Authors';
import { Members } from './Features/Members/Members';
import { BookCatalog } from './Features/BookCatalog/BookCatalog';
import { BookInventory } from './Features/BookInventory/BookInventory';
import { BookReservation } from './Features/BookReservation/BookReservation';
import { Lending } from './Features/Lending/Lending';

function App() {
    useTheme();

    const menuItems: IMenuItemGroup[] = [
        {
            label: 'Library Management',
            items: [
                {
                    label: 'Authors',
                    url: '/authors'
                },
                {
                    label: 'Members',
                    url: '/members'
                },
                {
                    label: 'Book Catalog',
                    url: '/book-catalog'
                },
                {
                    label: 'Book Inventory',
                    url: '/book-inventory'
                },
                {
                    label: 'Reservations',
                    url: '/reservations'
                },
                {
                    label: 'Lending',
                    url: '/lending'
                }
            ]
        }
    ];

    return (
        <LayoutProvider>
            <DialogComponents confirmation={ConfirmationDialog} busyIndicator={BusyIndicatorDialog}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<DefaultLayout menu={menuItems} />}>
                            <Route path='/' element={<Home />} />
                            <Route path='/authors' element={<Authors />} />
                            <Route path='/members' element={<Members />} />
                            <Route path='/book-catalog' element={<BookCatalog />} />
                            <Route path='/book-inventory' element={<BookInventory />} />
                            <Route path='/reservations' element={<BookReservation />} />
                            <Route path='/lending' element={<Lending />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </DialogComponents>
        </LayoutProvider>
    );
}

export default App;
