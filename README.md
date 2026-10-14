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

`LIVE_DEMO_URL`

### Repository

https://github.com/stoychodebrenliev/React-Project