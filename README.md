# Task Manager

Local-first web app: admin signs up, creates employee logins, then everyone uses shared team discussions.

## Setup

```bash
cd task-manager
cp server/.env.example server/.env
npm run install:all
```

## Run

```bash
npm run dev:server   # http://localhost:4000
npm run dev:client   # http://localhost:5173
```

Open **http://localhost:5173**

### How to use

1. **Admin console** → **Sign up** (create your admin email + password the first time).
2. Sign in later with that same admin ID.
3. In the admin console, **create employee logins** and share email + password with each person.
4. **Employee console** → employees sign in only (no self-registration).
5. **Discussions** are shared: admin and all employees can see the same threads.

Optional env seed (`ADMIN_EMAIL` / `ADMIN_PASSWORD`) is no longer required — admin signup is the start.
