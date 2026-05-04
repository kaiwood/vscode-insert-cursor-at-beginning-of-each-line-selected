# Insert Cursor at Beginning of Each Line Selected

## Features

This extension overwrites the shortcut for `editor.action.insertCursorAtEndOfEachLineSelected` (`shift+alt+i`) and will insert the cursors at the start of the selection, instead of the end.

## Extension Settings

If you don't like the opinionated shortcut of this extension and want to keep VS Code's default, you can either unbind this extension's shortcut:

```json
{
    "key": "shift+alt+i",
    "command": "-insert-cursor-at-beginning-of-each-line-selected.insertCursors"
}
```

Or rebind the default command:

```json
{
    "key": "shift+alt+i",
    "command": "editor.action.insertCursorAtEndOfEachLineSelected",
    "when": "editorTextFocus"
}

```

## Development

```sh
npm install
npm run compile
npm test
```

## Release Notes

### Unreleased

- Modernized the extension build, test, and packaging tooling for current VS Code.
- Added integration coverage for the cursor insertion command.
- Invoking the command without an active editor is now a no-op.

### 1.0.0

Initial release
