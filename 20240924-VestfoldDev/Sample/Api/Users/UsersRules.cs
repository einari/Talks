using Events.Users;
using Cratis.Chronicle.Rules;
using Cratis.Chronicle.Projections;
using FluentValidation;

namespace Api.Users;

// public class UsersRules : RulesFor<UsersRules, Onboard>
// {
//     public UsersRules()
//     {
//         RuleForState(_ => _.UserNames)
//             .Unique(_ => _.UserName)
//             .WithMessage("User with name already exists");
//     }

//     public IEnumerable<string> UserNames { get; set; } = [];

//     public override void DefineState(IProjectionBuilderFor<UsersRules> builder) => builder
//         .Children(_ => _.UserNames, _ => _
//             .IdentifiedBy(_ => _)
//             .From<OnboardingStarted>(_ => _.UsingKey(_ => _.UserName)));
// }
