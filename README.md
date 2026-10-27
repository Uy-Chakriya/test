# Mini Task Manager

Tiny frontend project for practicing Git branches, commits, push, fetch, and merge.

## Run locally

Open `index.html` in a browser. No installation is needed.

## Features

- Add tasks
- Mark tasks complete
- Delete tasks
- Clear completed tasks
- Persist tasks with localStorage

## Suggested practice

1. Create a GitHub repository and push this project to `main`.
2. Create `dev` from `main` and push it.
3. Create `feature/change-title` from `dev`, edit `index.html`, commit, and push.
4. Make a separate change on `dev` (for example, edit the README).
5. On the feature branch, run `git fetch origin`, then `git merge origin/dev` to incorporate the latest dev code. Resolve conflicts if any.
6. Push the feature branch and create a pull request targeting `dev`.

**Safety:** `git fetch` only downloads branch information. It does not change your current files. Before merging, commit your own work and inspect `git status`.
