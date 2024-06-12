using System.Reactive.Linq;
using System.Reactive.Subjects;

var observable = new BehaviorSubject<int>(0);


observable.OnNext(1);
observable.OnNext(2);
observable.OnNext(3);
observable.OnNext(4);

observable.Where(_ => _ > 2).Subscribe(Console.WriteLine);
