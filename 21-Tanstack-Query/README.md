# Tanstack Query
- It is a popular library used in react application for managing server state handling <mark style="background-color:green">Asynchronous data fetching</mark>
- It provides a set of hooks that simplify the process of fetching, caching, synchronizing, and updating data in a React app.

- It is a <mark>Framework Agnostic</mark>
- - It is not Limited to React, it has been expaned to support other frameworks and libraries
## Query Client
- It is the  heart of Tanstack query
- It is responsible for fetching data from the server

## useQuey():
- it is a function that helps us to fetch and manage server data in our application

## Deduplication
- if we try to fetch the same data multiple times at once. it will only send one request instead of many. Deduplication helps avoid asking for same data over and over again