# 7.2 Use state and hooks

## Task:

We want to build an application that will not only download from the service, but also display users accordingly, allowing them to be searched using [SearchBox Component](./shared/SearchBox.tsx)

Use the appropriate `hooks` and connect the logic, prepare the appropriate types for the data and for the `props` handling in the components.

Connect the logic so that after the application starts:
- [ ] Data in `UsersPanel.tsx` was fetched from [usersService](./services/users.service.ts)
- [ ] It was possible to "filter" (search) after `.name` for a user with `SearchBox.tsx`
