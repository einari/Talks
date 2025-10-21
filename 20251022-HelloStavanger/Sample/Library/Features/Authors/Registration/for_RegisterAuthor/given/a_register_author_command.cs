// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors.Registration.for_RegisterAuthor.given;

public class a_register_author_command : Specification
{
    protected RegisterAuthor _command;
    protected FirstName _firstName;
    protected LastName _lastName;

    void Establish()
    {
        _firstName = "Isaac";
        _lastName = "Asimov";
        _command = new RegisterAuthor(_firstName, _lastName);
    }
}
