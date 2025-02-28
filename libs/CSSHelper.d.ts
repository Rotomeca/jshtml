import JsHtml from "../JsHtml";
export = CSSHelper;
declare type TransitionOptions = {
  delay?: string | number | null;
  easing?: ?string;
  behavior?: ?string;
};

declare type TransitionAllOptions = {
  ms?: string;
}

declare class CSSHelper<TNode extends JsHtml.Helper.JsHtmlNode> {
  constructor(jshtml: TNode);
  transition(name: string, ms: string, {delay = undefined, easing = undefined, behavior = undefined}?: TransitionOptions): TNode;
  transitionAll({
    ms = '0.1s',
    delay = undefined,
    easing = undefined,
    behavior = undefined,
  }?: TransitionOptions & TransitionAllOptions) : TNode;
}