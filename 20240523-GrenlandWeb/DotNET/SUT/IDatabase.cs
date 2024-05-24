using MongoDB.Driver;

namespace SUT;

public interface IDatabase
{
    IMongoCollection<T> GetCollectionFor<T>();
}
