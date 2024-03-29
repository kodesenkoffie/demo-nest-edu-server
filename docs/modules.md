# Modules in NestJS

- Foundational building block of Nest Application
- Root module (Entry Point)
- Module Isolation Principle (application is organized into distinct functional and feature based modules)

## Providers

- Classes act as services, factories or repositories.
- Encapsulates business logic and can be injected into controllers or other services

## Controllers

- Functions of handling incoming HTTP requests and sending the response back to client.
- Uses the controller pattern for request handling.

## Imports

- Array that specifies the external modules for the current module
- Reusability and separation of concerns

## Exports

- Utilized to make services available to other modules
- Encapsulation and modular design
