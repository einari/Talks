// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors.Removal.for_RemoveAuthor.given;

public class a_remove_author_command : Specification
{
    protected RemoveAuthor _command;
    protected AuthorId _authorId;

    void Establish()
    {
        _authorId = AuthorId.New();
        _command = new RemoveAuthor(_authorId);
    }
}
