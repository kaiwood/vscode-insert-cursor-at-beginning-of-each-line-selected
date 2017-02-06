'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('insert-cursor-at-beginning-of-each-line-selected.insertCursors', () => {
        let editor = vscode.window.activeTextEditor;

        let currentPosition = editor.selection.start.character;
        let firstLine = editor.selection.start.line;
        let lastLine = editor.selection.end.line;

        let newPosition = new vscode.Position(firstLine, currentPosition);

        let selections = [];
        for (let lineNumber = firstLine; lineNumber <= lastLine; lineNumber++) {
            let position = new vscode.Position(lineNumber, currentPosition);
            selections.push(new vscode.Selection(position, position));
        }

        editor.selections = selections;
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}