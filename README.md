Why This Design?
    Storage Strategy (localStorage)
        Persistence Without Backend: LocalStorage allows the app to save notes even after page reloads.

        Speed: Instant access to stored data without async API calls.

        Simplicity: No server setup required, great for offline or demo apps.

    Component Design
        Modular Structure: App, NoteForm, NoteList, NoteItem are cleanly separated for readability and reusability.

        Single Responsibility Principle: Each component does one job (form handling, listing, display, etc.).


    State Management
        useState for local UI control.

        useEffect to sync notes to localStorage when notes change.

        Single source of truth for notes in App ensures predictable updates and avoids data duplication.


    Styling with Tailwind CSS

        Utility-first CSS makes rapid styling easier.

        Responsive & Clean UI with minimal code.

        Dark/light potential through class toggles.

        Navigation (Add/View Toggle)

        Simple view state toggle (add / list) via useState.

        No routing overhead: Keeps the UX minimal and avoids overengineering for such a simple app.

Folder Structure

    ├── components/
    │   ├── NoteForm.js
    │   ├── NoteItem.js
    │   └── NoteList.js
    ├── services/
    │   └── storageServices.js
    ├── App.js
    ├── index.js
    └── styles.css (Tailwind)

Future Improvements
    Add dark mode support.
    Implement search/filter feature.
    Edit notes functionality.
    Sync notes to cloud using Firebase or Supabase.
License
    MIT – feel free to use, share, and modify.