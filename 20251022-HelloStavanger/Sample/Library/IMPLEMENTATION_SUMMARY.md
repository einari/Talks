# Library Management System - Complete Implementation

This is a comprehensive library management system built using **Vertical Slices Architecture** with:
- **.NET 9** backend with **Chronicle** (Event Sourcing & CQRS)
- **React** frontend with **PrimeReact** components
- **MongoDB** for read models

## ✅ Completed Features

### 1. **Authors Management**
**Location:** `/Features/Authors/`

#### Slices:
- **Registration** (`Registration/Registration.cs`)
  - Command: `RegisterAuthor(FirstName, LastName)`
  - Event: `AuthorRegistered`
  - Validation: Required fields
  - Constraint: Unique author name
  - Frontend: `RegisterAuthorForm.tsx` - Form with first/last name inputs

- **Listing** (`Listing/Listing.cs`)
  - Read Model: `Author(Id, FirstName, LastName)`
  - Query: `AllAuthors` - Observable query for all authors
  - Projection: Projects from `AuthorRegistered` events
  - Frontend: `AuthorsList.tsx` - DataTable with author list

- **Removal** (`Removal/Removal.cs`)
  - Command: `RemoveAuthor(AuthorId)`
  - Event: `AuthorRemoved`
  - Projection: Removes author from read model
  - Frontend: Delete button in `AuthorsList.tsx`

**Concepts:** `AuthorId`, `FirstName`, `LastName`

---

### 2. **Members Management**
**Location:** `/Features/Members/`

#### Slices:
- **Registration** (`Registration/Registration.cs`)
  - Command: `RegisterMember(FirstName, LastName)`
  - Event: `MemberRegistered`
  - Validation: Required fields
  - Frontend: `RegisterMemberForm.tsx`

- **Listing** (`Listing/Listing.cs`)
  - Read Model: `Member(Id, FirstName, LastName)`
  - Query: `AllMembers`
  - Projection: Projects from `MemberRegistered`
  - Frontend: `MembersList.tsx`

**Concepts:** `MemberId`, `MemberFirstName`, `MemberLastName`

---

### 3. **Book Catalog**
**Location:** `/Features/BookCatalog/`

#### Slices:
- **Registration** (`Registration/Registration.cs`)
  - Command: `RegisterBook(ISBN, Title, AuthorId, Tags)`
  - Event: `BookRegistered`
  - Validation: Required ISBN, title, author
  - Constraint: Unique ISBN
  - Frontend: `RegisterBookForm.tsx` - Form with ISBN, title, author dropdown, tags chips

- **Listing** (`Listing/Listing.cs`)
  - Read Model: `Book(ISBN, Title, AuthorId, Tags)`
  - Query: `AllBooks`
  - Projection: Projects from `BookRegistered`
  - Frontend: `BooksList.tsx` - Shows books with tags

**Concepts:** `ISBN`, `BookTitle`, `BookTag`

---

### 4. **Book Inventory**
**Location:** `/Features/BookInventory/`

#### Slices:
- **Registration** (`Registration/Registration.cs`)
  - Command: `AddBooksToInventory(ISBN, Count)`
  - Event: `BooksAddedToInventory`
  - Validation: Valid ISBN, count > 0
  - Frontend: `AddBooksForm.tsx` - Select book from catalog, enter quantity

- **Listing** (`Listing/Listing.cs`)
  - Read Model: `InventoryItem(ISBN, Title, AuthorId, AvailableCount, TotalCount)`
  - Query: `AllInventoryItems`
  - Projection:
    - Creates inventory from `BookRegistered` (catalog)
    - Updates counts from `BooksAddedToInventory`
    - Decrements from `InventoryAdjustedForLostBooks`
    - Decrements available from `BookReserved`
    - Decrements available from `BookLent`
  - Frontend: `InventoryList.tsx` - Shows available/total counts

- **Adjustment** (`Adjustment/Adjustment.cs`)
  - Command: `AdjustInventoryForLostBooks(ISBN, Count)`
  - Event: `InventoryAdjustedForLostBooks`
  - Frontend: `AdjustInventoryForm.tsx` - Adjust for lost books

**Key Feature:** Real-time inventory tracking across catalog, reservations, and lending!

---

### 5. **Book Reservations**
**Location:** `/Features/BookReservation/`

#### Slices:
- **Reservation** (`Reservation/Reservation.cs`)
  - Command: `ReserveBook(ISBN, MemberId)`
  - Event: `BookReserved`
  - Validation: Required ISBN and Member
  - **Note:** Inventory validation should be added via business rules
  - Frontend: `ReserveBookForm.tsx` - Select available book and member

- **Listing** (`Listing/Listing.cs`)
  - Read Model: `BookReservationItem(Id, ISBN, Title, MemberId, MemberFirstName, MemberLastName)`
  - Query: `AllReservations`
  - Projection: Joins with Book Catalog and Members
  - Frontend: `ReservationsList.tsx` - Shows reservations with member info

**Concepts:** `ReservationId`

---

### 6. **Lending**
**Location:** `/Features/Lending/`

#### Slices:
- **Lend Out** (`LendOut/LendOut.cs`)
  - Command: `LendBook(ISBN, MemberId)`
  - Event: `BookLent(ISBN, MemberId, LentAt)`
  - Frontend: `LendBookForm.tsx` - Select book and member

- **Listing** (`Listing/Listing.cs`)
  - Read Model: `LendingItem(Id, ISBN, Title, MemberId, MemberFirstName, MemberLastName, LentAt)`
  - Query: `AllLendings`
  - Projection: Joins with Book Catalog and Members
  - Frontend: `LendingsList.tsx` - Shows borrowed books with dates

**Concepts:** `LendingId`

---

## 🏗️ Architecture Highlights

### Vertical Slices Pattern
✅ Each slice is self-contained in its own folder
✅ Single C# file per slice contains ALL artifacts (commands, events, validators, read models)
✅ Handle() methods defined directly on command records (no separate handlers)
✅ Frontend components colocated with backend in same slice folder

### Event Sourcing & CQRS
✅ Commands produce events as the source of truth
✅ Read models projected from events
✅ Automatic TypeScript proxy generation from C# code
✅ Observable queries for real-time updates

### Data Flow Example (Book Inventory)
1. `RegisterBook` → `BookRegistered` → Creates inventory item with 0 count
2. `AddBooksToInventory` → `BooksAddedToInventory` → Increases available & total
3. `ReserveBook` → `BookReserved` → Decreases available count
4. `LendBook` → `BookLent` → Decreases available count
5. `AdjustInventoryForLostBooks` → `InventoryAdjustedForLostBooks` → Decreases both counts

### Projections & Joins
- Inventory reads from Book Catalog (title, author)
- Reservations join Book Catalog + Members
- Lending joins Book Catalog + Members
- All updates happen through event projections!

---

## 📁 Project Structure

```
Library/
├── Features/
│   ├── Authors/
│   │   ├── AuthorId.cs
│   │   ├── FirstName.cs
│   │   ├── LastName.cs
│   │   ├── Authors.tsx (main page)
│   │   ├── Registration/
│   │   │   ├── Registration.cs (command, event, validator, constraint)
│   │   │   ├── RegisterAuthorForm.tsx
│   │   │   └── for_RegisterAuthor/ (specs)
│   │   ├── Listing/
│   │   │   ├── Listing.cs (read model, projection, query)
│   │   │   └── AuthorsList.tsx
│   │   └── Removal/
│   │       ├── Removal.cs
│   │       └── for_RemoveAuthor/ (specs)
│   ├── Members/
│   ├── BookCatalog/
│   ├── BookInventory/
│   ├── BookReservation/
│   └── Lending/
├── App.tsx (routes & navigation)
└── Program.cs (Chronicle setup)
```

---

## 🚀 Running the System

1. **Build Backend:**
   ```bash
   cd Library
   dotnet build
   ```
   This generates TypeScript proxies in `Features/` folders

2. **Start Backend:**
   ```bash
   dotnet run
   ```
   API: `http://localhost:5000`
   Swagger: `http://localhost:5000/swagger`

3. **Start Frontend:**
   ```bash
   yarn dev
   ```
   App: `http://localhost:5173`

---

## 🎯 Navigation Menu

The application has a single menu group "Library Management" with:
- Authors
- Members
- Book Catalog
- Book Inventory
- Reservations
- Lending

---

## ⚡ Key Patterns Used

1. **Concepts** - Value types wrapping primitives (ISBN, AuthorId, etc.)
2. **Commands** - Immutable records with Handle() methods
3. **Events** - Immutable records representing state changes
4. **Validators** - FluentValidation for input validation
5. **Constraints** - Business rule constraints (unique ISBN, etc.)
6. **Read Models** - Queryable projections from events
7. **Projections** - Event-driven read model updates
8. **Joins** - Cross-feature data composition in projections

---

## 📝 Notes

- All backend code follows C# 13 conventions
- File-scoped namespaces throughout
- Primary constructors used
- EventSourceId automatically resolved from [Key] attribute or EventSourceId parameters
- TypeScript proxies auto-generated on build
- Observable queries provide real-time updates
- MongoDB used for read model storage
- Chronicle manages event store

---

## 🎉 Complete Feature Matrix

| Feature | Registration | Listing | Additional Operations |
|---------|-------------|---------|----------------------|
| Authors | ✅ | ✅ | Delete |
| Members | ✅ | ✅ | - |
| Book Catalog | ✅ | ✅ | - |
| Book Inventory | ✅ (Add) | ✅ | Adjust for Lost |
| Reservations | ✅ (Reserve) | ✅ | - |
| Lending | ✅ (Lend) | ✅ | - |

All features fully implemented with both backend and frontend! 🎊
