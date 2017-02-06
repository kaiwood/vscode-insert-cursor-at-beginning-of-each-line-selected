# Insert Cursor at Beginning of Each Line Selected

## Features

This extension overwrites the shortcut for `editor.action.insertCursorAtEndOfEachLineSelected` (`shift+alt+i`) and will insert the cursors at the start of the selection, instead of the end.

## Extension Settings

If you don't like the opinionated shortcut of this extension and like to keep VSCodes default, you can either unbind the extensions one like this:

```json
{
    "key": "shift+alt+i",
    "command": "-insert-cursor-at-beginning-of-each-line-selected.insertCursors"
}
```

or rebind the default one:

```json
{
    "key": "shift+alt+i",
    "command": "editor.action.insertCursorAtEndOfEachLineSelected",
    "when": "editorTextFocus"
}

```
