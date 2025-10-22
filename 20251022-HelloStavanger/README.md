# Hello Stavanger 2025 - Maintainable Vibe Coding

This folder contains the resources fr the talk done at #HelloStavanger 2025.

## Resources

Below are all the links shared in the presentation

- [Stanford Report](https://softwareengineeringproductivity.stanford.edu/) and on [YouTube](https://www.youtube.com/watch?si=gn3Da1NiNcEzX6Yo&v=tbDDYKRFjhk)
- [Domain Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Understanding Event Sourcing](https://eventsourcingbook.com)
- [Event Sourcing Course](https://www.eventsourcingcourse.com)
- [Event Modeling](https://www.eventsourcingcourse.com)
- [Awesome CoPilot](https://github.com/github/awesome-copilot)
- [Cratis](https://cratis.io)
- [Cratis Vertical Slices MCP](https://github.com/Cratis/VerticalSlices)
- [Cratis Chronicle MCP](https://github.com/Cratis/Chronicle.Mcp)
- [Context7 MCP](https://github.com/upstash/context7)
- [MCP Registry](https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/)
- [GitHub MCP Registry](https://github.com/mcp)

## Sample

In the [Sample](./Sample/) folder you'll find the sample that was a result of AI
generated code. It includes all the [instructions](./Sample/.github/instructions/) that
made it possible to generate fairly consistently the same sample.

The specification that was used to build the sample can be found [here](./Sample/build-me-a-library-system.md).

### Running

To run the sample, you'll need:

- .NET 9 or better
- Docker engine
- Node20 or better

To run the finished solution, go to the `Library` folder from a **shell / terminal**

Run the necessary containers:

```shell
docker compose up -d
```

Start the backend:

```shell
dotnet run
```

Restore the frontend:

```shell
yarn
```

Run the frontend:

```shell
yarn dev
```

You should now be able to go navigate a browser to [http://localhost:9000](http://localhost:9000).