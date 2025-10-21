// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Members.Registration;

[Command]
public record RegisterMember(MemberFirstName FirstName, MemberLastName LastName)
{
    public (MemberRegistered, MemberId) Handle()
    {
        var memberId = MemberId.New();
        return (new MemberRegistered(FirstName, LastName), memberId);
    }
}

public class RegisterMemberValidator : CommandValidator<RegisterMember>
{
    public RegisterMemberValidator()
    {
        RuleFor(c => c.FirstName.Value).NotEmpty().WithMessage("First name is required");
        RuleFor(c => c.LastName.Value).NotEmpty().WithMessage("Last name is required");
    }
}

[EventType]
public record MemberRegistered(MemberFirstName FirstName, MemberLastName LastName);
