# NDC Oslo Community Tuesday 2024

This folder contains the samples shown at the NDC Oslo Community Tuesday 2024.

## Pre-requisites

* .NET 8
* Docker Desktop or similar
* NodeJS

## Presentation slides

The actual presentation slides can be found as a PDF [here](./Presentation/Building%20Reactive%20apps%20One%20event%20at%20a%20time.pdf).

## Before you run anything

At the root of this talk you'll find a file called `docker-compose.yml`.
Run `docker compose up -d` (or equivalent in your preferred container software).
This will start the [Cratis Chronicle](https://cratis.io) developer image which also
contains a MongoDB instance within it.

## Basic

The [Basic](./Basic/) folder contains a basic example of how you can do event sourcing from scratch for something like MongoDB.

## Observables

The [Observables](./Observables/) folder contains two folders; Main & Web.

### Main

The [Main](./Observables/Main/) folder within observables contains a more progressed version using Reactive Extensions to decouple the observers
without the event log having to know that there is a thing called observers. This leverages a `Subject<>` but exposes it as an `IObservable<>`
to prevent anything else from append to the subject.

### Web

The [Web](./Observables/Web/) folder contains a small Web project for visualizing observables using simplified marble diagrams.
Its purpose is only to give you a visual representation of what typically an event observer would be doing; filter on event types.

## Chronicle

The [Chronicle](./Chronicle/) folder shows how you can get started using [Cratis Chronicle](https://cratis.io) and implements
the same sample as in **Basic** or **Observables** only now using the Chronicle SDK.
You can navigate to the Chronicle Workbench by opening [http://localhost:8080](http://localhost:8080).
