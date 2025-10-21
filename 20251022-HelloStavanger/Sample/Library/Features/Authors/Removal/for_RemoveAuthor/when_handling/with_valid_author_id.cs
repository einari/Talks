// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors.Removal.for_RemoveAuthor.when_handling;

public class with_valid_author_id : given.a_remove_author_command
{
    AuthorRemoved _result;

    void Because() => _result = _command.Handle();

    [Fact] void should_return_author_removed_event() => _result.ShouldNotBeNull();
}
