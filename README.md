# Prosjektledelse

A calm, responsive project management workspace inspired by Japandi interiors: warm paper, olive accents, restrained borders and DM Sans typography.

## Run

Requires Node.js 20 or newer. No package installation or build step is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Run `npm run check` for syntax validation and domain tests. Any static host can serve the contents of `dist/`.

## Features

- Portfolio overview with completion, health, attention and budget metrics.
- Year selection and Q1–Q4 filters; project overlap determines the portfolio view.
- Quarterly roadmap and milestone checkpoints.
- Create, edit and delete projects, tasks, milestones and risks.
- Add tasks directly from project cards or portfolio rows. Project task panels include a quick-entry form for a task name, responsible person and deadline; keep entering tasks without leaving the project.
- Responsible-person suggestions come from existing project leads and task owners; new names are accepted. New tasks default to the selected project's lead and deadline (or today when that deadline has passed).
- Edit responsible people and deadlines directly in the project task list; changes save immediately. The full task editor offers “Create & add another” and retains the project, person and deadline.
- Task list and board, project/status filters, priorities, owners, due dates and completion dates.
- Project detail with task completion controls; progress and health update immediately.
- Planned versus actual monthly task completion, recorded budget usage, workload and activity.
- Search projects by name, description or lead.
- JSON backup/import with schema and relationship validation; CSV project reports.
- Empty workspace and clearly labelled sample workspace; responsive navigation, keyboard focus, accessible dialogs and reduced-motion support.

## Data and calculations

Data is stored in the browser's localStorage under `prosjektledelse.v1`. There is no server database, account system, automatic device sync or multi-user collaboration. The private Site controls access to the application, not synchronization of browser data. Export backups in Settings before switching devices or clearing browser storage. Sample data is illustrative and can be replaced with an empty workspace.

Task progress is completed tasks divided by total tasks, equally weighted. A project with no tasks has 0% progress. Health is Complete at 100%; otherwise Off track when its due date has passed; otherwise At risk when unfinished tasks are overdue or blocked; otherwise On track. Milestones are tracked independently of task progress. Quarter cards count tasks due in that quarter, while portfolio filters include all tasks in projects overlapping the selected quarter. Budget amounts are manually recorded in NOK.

Trends use the current task scope and due dates as a recalculating planned baseline. Actual history uses completion dates; reopening a task removes that completion. Actual series ends at the current month. This is not an immutable historical snapshot or forecasting model. Activity records the most recent 100 changes. The app uses the visitor's device clock.

## Structure

`dist/` contains the complete static app, `scripts/serve.mjs` is the local preview server, and `tests/` contains calculation and import validation checks. Google Fonts is optional; the app falls back to the system sans-serif font when offline. `.openai/hosting.json` identifies the associated private Sites deployment.

