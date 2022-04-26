# Developers Documentation

The project is structured using **clean architecture**.

## File Structure

```
src
├── App.tsx
├── assets
│   └── favicon.ico
├── components
│   ├── footer
│   │   └── index.tsx
│   ├── header
│   │   └── index.tsx
│   ├── index.ts
│   └── reload-prompt
│       ├── index.tsx
│       └── styles.css
├── hooks
│   └── app-recoil.ts
├── interfaces
│   └── index.d.ts
├── main.tsx
├── routes
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.ts
│   ├── layout.tsx
│   └── no-match.tsx
├── services
│   └── index.ts
├── theme.ts
├── utils
│   └── index.ts
└── vite-env.d.ts
```

- `assets`: contains the assets that are used in the application.
- `components`: contains the reusable component views that will be used throughout the application.
  - Each component is located inside a directory with the name of the component. Example: `components/footer/index.tsx` or `components/header/index.tsx`. Within this directory will be placed all the things that only use that component. Example: `components/footer/styles.css` or `components/header/styles.css`. If a function, hook, interface, style, etc is to be placed inside `src` inside its respective folder. Example: `src/hooks/app-recoil.ts` or `src/interfaces/index.d.ts`.
- `hooks`: contains the hooks that are used with business logic in the application. (recoil, firebase auth, database, etc)
- `interfaces`: contains the interfaces of the objects that will be used throughout the application. If an interface is unique to a component, it can be placed inside the component folder.
- `routes`: contains the routes of the application. Unlike the components inside the `components` folder, routes are functional components that can contain logic within them. Example: `routes/home.tsx` or `routes/about.tsx`. Each of these components is a route.
- `services`: contains the services used in the application. Here is going to place what has to do with Firebase and any other service external to the application.
- `utils`: This folder is to place the functions that are going to be used throughout the application. As a function to calculate current balance, income, etc. Example: `utils/get-balance.ts`.

_The names of the directories and documents are important for the structure of the project. Therefore, it must be written in lowercase, without spaces, without accents or special characters and separated by hyphens._

## Firestore

#### Users collection

**Path:** `/users/` or `/users/{userId}`

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `id`      | `string` | **Required**. User ID |
