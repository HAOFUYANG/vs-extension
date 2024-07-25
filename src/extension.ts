// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "first-demo.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from first-demo!哈哈aasasasa哈"
      );
    }
  );
  // 命令2：展示当前时间
  let disposable2 = vscode.commands.registerCommand(
    "extension.showCurrentTime",
    function () {
      const currentTime = new Date().toLocaleTimeString();
      vscode.window.showInformationMessage(`Current Time: ${currentTime}`);
    }
  );
  let count = vscode.commands.registerCommand("extension.count", () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // 没有打开的编辑器
    }
    let selection = editor.selection;
    let fileName = editor.document.fileName;
    let text = editor.document.getText(selection);
    vscode.window.showInformationMessage(`${fileName},长度是${text.length}`);
  });

  let insertConsole = vscode.commands.registerCommand(
    "extension.console",
    () => {
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
        return; // 没有打开的编辑器
      }
      const document = editor.document;
      const selection = editor.selection;

      // 获取选中的文本
      const selectedText = document.getText(selection);
      const logStatement = `console.log(${JSON.stringify(selectedText)});`;
      console.log("logStatement :>> ", logStatement);

      editor
        .edit((editBuilder) => {
          editBuilder.replace(selection, logStatement);
        })
        .then(() => {
          console.log("11111111 :>> ", 11111111);
        });
      vscode.window.showInformationMessage(logStatement);
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
  context.subscriptions.push(count);
  context.subscriptions.push(insertConsole);
}

// This method is called when your extension is deactivated
export function deactivate() {}
