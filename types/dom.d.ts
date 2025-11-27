// dom.d.ts
export declare function queryElement(selector: string): Element | NodeList | undefined;

export declare function hasClass(el: Element | NodeList | Element[], className: string): boolean;

export declare function addClass(el: Element | NodeList | Element[], className: string): Element | NodeList | Element[];

export declare function removeClass(el: Element | NodeList | Element[], className: string): Element | NodeList | Element[];

export declare function replaceClass(
  el: Element | NodeList | Element[],
  oldClassName: string,
  newClassName: string
): Element | NodeList | Element[];

export declare function getSiblings(el: Element): Element[] | undefined;

export declare function getStyle(el: Element): CSSStyleDeclaration;
export declare function getStyle(el: Element, attrName: string): string | undefined;
export declare function getStyle(el: Element, attrName?: string): CSSStyleDeclaration | string | undefined;

export declare function addStyle(
  el: Element | NodeList | Element[],
  styles: Record<string, string | number>
): Element | NodeList | Element[];

export declare function insertAfter(el: Element, htmlString: string): void;

export declare function insertBefore(el: Element, htmlString: string): void;
