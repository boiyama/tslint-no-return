import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "Unexpected return, use concise body syntax instead.";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(
      new NoReturnWalker(sourceFile, this.getOptions())
    );
  }
}

class NoReturnWalker extends Lint.RuleWalker {
  public visitNode(node: ts.Node): void {
    if (node && node.kind === ts.SyntaxKind.ReturnStatement) {
      this.addFailure(
        this.createFailure(
          node.getStart(),
          node.getWidth(),
          Rule.FAILURE_STRING
        )
      );
    }
    super.visitNode(node);
  }
}
