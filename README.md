# High-Protein Yoghurt

A React Single Page Application for discovering, creating and managing yoghurt-based recipes.

The application uses Supabase for authentication, database storage and Row Level Security.

For the development checklist, see `DEV_NOTES.md`.

---

## Features & User Access

### Guest Users

Guests can:

- View all recipes
- View recipe details
- Register
- Login

Guests cannot access Create Recipe, Favorites or My Recipes.

### Authenticated Users

Authenticated users can:

- Create recipes
- Edit and delete their own recipes
- Add and remove recipes from Favorites
- View their Favorites
- View their own recipes
- Logout

Users cannot edit or delete recipes created by another user.

---

## Authentication & Route Guards

Authentication is handled with Supabase Auth.

The application supports:

- Registration
- Login
- Logout
- Persistent sessions

`supabase.auth.getSession()` checks the current session when the application loads.

`onAuthStateChange()` listens for login and logout changes.

The authenticated user is shared across the application through `UserContext`.

Private routes are protected with a reusable `ProtectedRoute` component.

Protected routes:

- `/create-recipe`
- `/favorites`
- `/users/:userId/recipes`

Guests trying to access these routes are redirected to `/login`.

Authenticated users are redirected away from Login and Register.

---

## Routes

### Public Routes

- `/` – Home
- `/recipes` – All Recipes
- `/recipes/:id` – Recipe Details
- `/login` – Login
- `/register` – Register

### Protected Routes

- `/create-recipe` – Create Recipe
- `/favorites` – Favorite Recipes
- `/users/:userId/recipes` – My Recipes

The application includes two dynamic routes:

- `/recipes/:id`
- `/users/:userId/recipes`

`useParams()` is used to read URL parameters and load the corresponding data.

Navigation uses React Router `Link` and `Navigate` without full page reloads.

---

## Recipe Data & CRUD

Recipes are stored in Supabase and loaded dynamically.

The application implements full CRUD functionality:

### Create
Authenticated users can create recipes through `/create-recipe`.

### Read
Users can view the recipe catalog and individual recipe details.

### Update
Recipe owners can edit their recipes through an edit modal on the Recipe Details page.

### Delete
Recipe owners can delete their recipes after confirming the action.

Each recipe contains a `user_id`, which identifies its creator.

Edit and Delete controls are only available when:

`user.id === recipe.user_id`

---

## Favorites

Authenticated users can add and remove recipes from Favorites.

Favorites are stored in a separate Supabase `favorites` table using:

- `user_id`
- `recipe_id`

A unique combination of `user_id` and `recipe_id` prevents duplicate favorites.

The Favorites page loads the saved recipe IDs and retrieves the corresponding recipes from the database.

---

## Forms & Validation

The Create Recipe form uses controlled React inputs.

Form values are stored in React state and updated through a shared `handleChange()` function.

Validation includes:

- Required title
- Required description
- Required ingredients
- Required instructions
- Preparation time greater than 0
- Servings greater than 0
- Required image URL

Validation errors are stored in an `errors` object and displayed next to the corresponding fields.

Invalid forms are stopped before sending data to Supabase.

Supabase request errors are also handled and displayed to the user.

---

## React Hooks & Context

The application uses:

### `useState`

For:

- Recipes
- User data
- Favorites
- Forms
- Validation errors
- Loading states
- Modal state

### `useEffect`

For:

- Loading recipes
- Loading recipe details
- Checking Favorites
- Loading user sessions
- Listening for authentication changes
- Loading recipes created by a specific user

### Custom Hook

`useRecipes()` contains reusable recipe-fetching logic and manages:

- Recipe data
- Optional limits
- Loading state
- Error state

It is used by both the main Recipes page and the Recipes section on the Home page.

### Context API

`UserContext` provides the authenticated user to components without passing the user through multiple levels of props.

---

## Backend & Database

Supabase is used as Backend-as-a-Service for:

- Authentication
- PostgreSQL database
- Persistent sessions
- Recipe data
- Favorites
- Row Level Security

### Recipes Table

Main fields:

- `id`
- `title`
- `description`
- `ingredients`
- `instructions`
- `prep_time`
- `servings`
- `image_url`
- `user_id`
- `created_at`

### Favorites Table

Main fields:

- `id`
- `user_id`
- `recipe_id`
- `created_at`

### Row Level Security

For recipes:

- Recipes can be read
- Authenticated users can create recipes for themselves
- Only owners can update their recipes
- Only owners can delete their recipes

For favorites:

- Users can read their own favorites
- Users can create favorites for themselves
- Users can delete their own favorites

---

## Loading & Error Handling

The application displays loading states while data is being fetched from Supabase.

Loading states are used for:

- Recipe catalog
- Recipe details
- Favorites
- My Recipes

Empty states are displayed when a user has no Favorites or has not created any recipes.

API and form errors are shown to the user where appropriate.

---

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Recipes.jsx
│   ├── RecipeCard.jsx
│   ├── OurYoghurt.jsx
│   ├── Process.jsx
│   ├── BrandStory.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   └── UserContext.jsx
│
├── hooks/
│   └── useRecipes.js
│
├── lib/
│   └── supabaseClient.js
│
├── pages/
│   ├── RecipesPage.jsx
│   ├── RecipeDetails.jsx
│   ├── CreateRecipe.jsx
│   ├── FavoritesPage.jsx
│   ├── MyRecipesPage.jsx
│   ├── Login.jsx
│   └── Register.jsx
│
├── styles/
├── App.jsx
└── main.jsx
```

---

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- Supabase
- PostgreSQL
- HTML5
- CSS3
- React Hooks
- Context API
- Git
- GitHub

---

## Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/stoychodebrenliev/React-Project.git
```

### 2. Open the project folder

```bash
cd React-Project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env.local`

Add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### 5. Start the application

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

The production files will be generated in the `dist` folder.

---

## Deployment

The React frontend is deployed separately from Supabase.

Supabase already provides the hosted authentication and database backend.

### Live Demo

https://react-project-omega-teal.vercel.app

### Repository

https://github.com/stoychodebrenliev/React-Project

# Functional Guide

## 1. Project Overview

**Application Name:** High-Protein Yoghurt  
**Application Category / Topic:** Recipe Blog / Recipe Management SPA

**Main Purpose:**  
High-Protein Yoghurt is a React Single Page Application where visitors can discover yoghurt-based recipes and read their ingredients and cooking instructions. Registered users can publish their own recipes, manage the recipes they have created, and save other recipes to a personal Favorites collection. The application uses a hosted Supabase backend for authentication and persistent recipe data.

## 2. User Access & Permissions

### Guest (Not Authenticated)

- **Available pages / routes:** Home (`/`), All Recipes (`/recipes`), Recipe Details (`/recipes/:id`), Login (`/login`), and Register (`/register`).
- **Public data shown:** Recipe cards and individual recipe details, including the title, photo, description, preparation time, servings, ingredients, and instructions.
- **Restrictions:** Guests cannot open Create Recipe, Favorites, or My Recipes; protected-route access redirects them to Login. Guests cannot create, edit, delete, or save recipes to Favorites.

### Authenticated User

- **Main sections / pages:** All public pages, Create Recipe (`/create-recipe`), Favorites (`/favorites`), and My Recipes (`/users/:userId/recipes`).
- **Details pages:** Users can open individual recipes at `/recipes/:id` and add or remove them from Favorites.
- **Create / Edit / Delete actions:** A logged-in user can create recipes. Edit and Delete buttons are displayed on a recipe's details page only when the signed-in user's ID matches the recipe's `user_id`. The user's saved favorites are managed separately.

## 3. Authentication & Session Handling

### Authentication Flow

1. When the application loads, `App.jsx` calls `supabase.auth.getSession()` to retrieve an existing session and initializes the current user.
2. The app subscribes to `supabase.auth.onAuthStateChange()`, updating its user state whenever the authentication state changes. The user is supplied to components through `UserContext`.
3. Login uses `supabase.auth.signInWithPassword()`; on success, the user is navigated to the home page. Registration uses `supabase.auth.signUp()`, checks whether the two passwords match, and navigates home if the sign-up request succeeds. Depending on Supabase's email-confirmation settings, the new user may need to verify their email before signing in.
4. The Logout button calls `supabase.auth.signOut()`. The authentication-state listener updates the UI, and private routes require an authenticated user.

### Session Persistence

- Supabase Auth manages the browser session. `UserContext` shares the active user in React while the application is running; it does not itself store the persistent session.
- After a refresh, the existing session is retrieved with `getSession()`. `ProtectedRoute` waits for the initial authentication check before deciding whether to render a private page or redirect to Login.

## 4. Routing Structure

### Route Guards Logic

- Public routes are available without logging in.
- `ProtectedRoute` guards `/create-recipe`, `/favorites`, and `/users/:userId/recipes`; guests are redirected to `/login`.
- Login and Register redirect authenticated users to `/`.

### Main Routes

| Route | Page | Access |
| --- | --- | --- |
| `/` | Home, featured recipes and product information | Public |
| `/recipes` | All Recipes catalog | Public |
| `/recipes/:id` | Recipe Details | Public |
| `/login` | Login | Guest only |
| `/register` | Register | Guest only |
| `/create-recipe` | Create Recipe | Authenticated |
| `/favorites` | Saved Favorites | Authenticated |
| `/users/:userId/recipes` | Recipes by user (My Recipes via navigation) | Authenticated |

There are **8 declared page routes**. React Router provides client-side navigation without full-page reloads.

### Nested & Parameterized Routes

- The route declarations in `App.jsx` are not configured as nested layout/child routes. The Home page is composed of several React components.
- `/recipes/:id` uses a recipe ID to load one recipe.
- `/users/:userId/recipes` uses a user ID to load recipes created by that user.
- `useParams()` reads these route parameters.

## 5. List → Details Flow

### Catalog / List Page

- The All Recipes catalog loads recipe records from Supabase using the reusable `useRecipes()` hook.
- Each recipe is represented by a linked card showing its image and title. The Home page also shows a limited selection of recipes.
- Users browse and open recipes by selecting a card. **There is currently no search, filtering, or sorting control in the catalog.**

### Details Page

- A React Router `Link` on a recipe card navigates to `/recipes/:id`.
- `RecipeDetails.jsx` reads `id` with `useParams()` and requests that recipe from Supabase.
- The details page displays its image, title, description, prep time, servings, ingredients, and instructions.
- `useNavigate()` is used for programmatic navigation after creating or deleting a recipe.

## 6. Data Source & Backend

**Backend Type:** Supabase (hosted Backend-as-a-Service).

- Supabase Auth provides registration, login, logout, and browser sessions.
- A hosted PostgreSQL database stores recipes in the `recipes` table and saved items in the `favorites` table.
- The React frontend performs actual asynchronous Supabase queries rather than relying on hardcoded recipe data.
- `recipes` includes fields such as `id`, `title`, `description`, `ingredients`, `instructions`, `prep_time`, `servings`, `image_url`, `user_id`, and `created_at`.
- `favorites` associates `user_id` with `recipe_id`.
- The project README describes Row Level Security policies for recipe ownership and per-user favorites; these policies must also be configured correctly in the hosted Supabase project.
- The frontend is hosted on Vercel: https://react-project-omega-teal.vercel.app . Supabase is already hosted, so there is no custom server to deploy separately.

## 7. Data Operations (CRUD)

The primary CRUD collection is **`recipes`**. Supabase's JavaScript SDK is used for database operations (rather than writing `fetch()` calls for each HTTP verb).

### Create (POST / Insert)

- Authenticated users open `/create-recipe`, complete the form, and submit it.
- After client-side checks, the application uses `supabase.from('recipes').insert(...)`, associating the new recipe with `user.id`.
- A successful creation navigates to the newly created recipe's details page.

### Read (GET / Select)

- The catalog and Home recipe section query `recipes` through `useRecipes()`.
- The Details page retrieves an individual recipe by `id`.
- My Recipes filters records by `user_id`; Favorites loads favorite recipe IDs and then their corresponding recipes.

### Update (PUT/PATCH / Update)

- Only the recipe author sees the Edit control on the Details page.
- Clicking Edit opens a form prefilled with the recipe's existing values.
- Saving calls `supabase.from('recipes').update(...).eq('id', id)`; the returned updated record replaces the local recipe state, so the details display changes without a page reload.

### Delete (Delete)

- Only the recipe author sees the Delete control.
- The app requests confirmation with `window.confirm()` before calling `supabase.from('recipes').delete().eq('id', id)`.
- After a successful deletion, the user is redirected to the All Recipes catalog.

Recipe ownership is checked when rendering Edit/Delete controls; actual database-level access restrictions depend on the configured Supabase RLS policies.

## 8. Forms & Validation

### Forms Used

- **Login:** Email and password.
- **Register:** Email, password, and password confirmation.
- **Create Recipe:** Title, description, ingredients, instructions, preparation time, servings, and image URL.
- **Edit Recipe (modal):** Editable versions of the recipe fields above.

These forms use React-controlled values and event handlers such as `onChange` and `onSubmit`.

### Validation Rules

1. **Recipe title:** Must not be empty or whitespace-only. A custom field error is displayed when it is missing.
2. **Recipe description / ingredients / instructions / image URL:** Each must contain a nonempty value in the Create Recipe form.
3. **Preparation time and servings:** The Create Recipe form checks for values less than or equal to zero and converts inputs to numbers before insertion.
4. **Register password confirmation:** Password and Confirm Password must match. Required fields and email input format are also checked by the browser.

The Create Recipe form stores field errors in React state and prevents submission when those checks return errors. Authentication and database operations report certain request failures to the user.

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

- **`useState`:** Stores form values, recipes, current user, loading status, error messages, modal visibility, and Favorites state.
- **`useEffect`:** Loads recipes and details after components mount, reacts to changes in recipe IDs or the authenticated user, and subscribes to authentication updates.
- **`useContext`:** Reads the authenticated user from `UserContext` in navigation, forms, and recipe-related pages.
- **`useParams`:** Reads recipe IDs and user IDs from the URL.
- **`useNavigate`:** Redirects after successful user actions.
- **`useRef`:** Supports the horizontal recipe carousel on the Home page.
- **Custom `useRecipes(limit)` hook:** Reuses recipe-fetching, loading, and error state in the Home section and full catalog.

**Mount / Update / Unmount example:** When `App` mounts, an effect checks the user's existing session and subscribes to Supabase authentication changes. Subsequent login/logout events update React user state and the displayed navigation. On unmount, the effect cleans up by unsubscribing from `onAuthStateChange()`.

### Context API

`UserContext.Provider` in `App.jsx` provides the authenticated user to `Header`, `ProtectedRoute`, Create Recipe, Recipe Details, and other consumers. This avoids passing authentication state down through multiple component props.

### Component Styling

The app uses separate external CSS files in `src/styles/`, including styles imported by navigation, recipes, authentication, recipe details, and the Create Recipe form. UI logic is organized into reusable React components and pages.

## 10. Typical User Flow

1. A visitor opens the Home page, chooses **All Recipes**, and opens a recipe card to read its details.
2. The visitor registers or logs in, which enables Create Recipe, Favorites, and My Recipes.
3. The authenticated user fills out the Create Recipe form and submits it. After successful creation, the app opens the new recipe's details page.
4. The author may edit or delete their own recipe; they may also add recipes to Favorites, revisit saved items through the Favorites page, and log out.

## 11. Error & Edge Case Handling

### Authentication Errors

- Login and Register display messages returned by Supabase when authentication requests fail.
- Registration also displays a mismatch error when password confirmation does not match.
- Protected routes display a loading state while the initial session check is in progress and redirect unauthenticated visitors to Login.

### Network or Data Errors

- The Home recipe section and All Recipes catalog display a loading message while querying and an error message if recipe loading fails.
- Recipe Details and My Recipes handle unsuccessful fetch requests with an error message.
- Create Recipe displays field-level validation errors and a submission error if a database insert fails. Recipe update and deletion failures also set an error message.

### Empty or Missing Data States

- My Recipes displays an explanatory message when the user has not created recipes.
- Favorites displays an empty-state message and links to the recipe catalog when nothing has been saved.
- Recipe Details handles missing or invalid recipe IDs through its failed-fetch/error state.

---

