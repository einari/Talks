// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors.Registration.for_RegisterAuthor.when_handling;

public class with_valid_data : given.a_register_author_command
{
    (AuthorRegistered @event, AuthorId authorId) _result;

    void Because() => _result = _command.Handle();

    [Fact] void should_return_author_registered_event() => _result.@event.ShouldNotBeNull();
    [Fact] void should_return_new_author_id() => _result.authorId.ShouldNotEqual(AuthorId.NotSet);
    [Fact] void should_include_first_name_in_event() => _result.@event.FirstName.ShouldEqual(_firstName);
    [Fact] void should_include_last_name_in_event() => _result.@event.LastName.ShouldEqual(_lastName);
}
