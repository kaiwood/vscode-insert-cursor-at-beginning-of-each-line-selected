import * as assert from 'assert';
import * as vscode from 'vscode';

const commandId = 'insert-cursor-at-beginning-of-each-line-selected.insertCursors';

suite('Extension Tests', () => {
    teardown(async () => {
        await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
    });

    test('inserts one cursor at the selection start character for each selected line', async () => {
        const document = await vscode.workspace.openTextDocument({
            content: ['alpha', 'bravo', 'charlie', 'delta'].join('\n'),
            language: 'plaintext'
        });
        const editor = await vscode.window.showTextDocument(document);

        editor.selection = new vscode.Selection(
            new vscode.Position(0, 2),
            new vscode.Position(2, 5)
        );

        await vscode.commands.executeCommand(commandId);

        assert.strictEqual(editor.selections.length, 3);
        assert.deepStrictEqual(
            editor.selections.map((selection) => ({
                active: [selection.active.line, selection.active.character],
                anchor: [selection.anchor.line, selection.anchor.character]
            })),
            [
                { active: [0, 2], anchor: [0, 2] },
                { active: [1, 2], anchor: [1, 2] },
                { active: [2, 2], anchor: [2, 2] }
            ]
        );
    });

    test('does not throw without an active editor', async () => {
        await vscode.commands.executeCommand('workbench.action.closeActiveEditor');

        await assert.doesNotReject(
            Promise.resolve(vscode.commands.executeCommand(commandId))
        );
    });
});
