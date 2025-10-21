# Build me a library system

## Authors

- Should be possible to register of authors, capture first name, last name of the author.
- Should be possible to view a list of existing authors
- SHould be possible to delete an author. If the author has books associated with it, we should not allow this.

## Members

- Should be possible to register members, capture first name, last name of the member.
- Should be possible to view a list of existing members.

## Book Catalog

- Should be possible to register books into the catalog, books are associated with an author and has the ISBN as its key
- Should be possible to add free-text tags to a book
- Should be possible to list all the books in the catalog.

## Book Inventory

- Should be possible to register a book based on the ISBN to the inventory with number of books being registered.
- Should be possible to list all the books in the inventory with information of the book coming from the catalog.
- Should be possible to adjust inventory when books are lost.

## Book Reservation

- Should be possible to reserve a book from the inventory for a member. If there are no available books from the inventory, this should be a validation error.
- Should be possible to list reservations of books and by who

## Lending

- Should be possible to lend out a book from the inventory for a member.
- Should be possible to list books being lent out and by who
