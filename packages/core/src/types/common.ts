interface Content extends BaseElement {
    x: number;
    y: number;
    zIndex: number;
    children: Content[];
}

interface ContentRoot {
    root: true;
    children: Content[]
}

type Element = BlockElement | InlineElement;

class BaseElement {
    id: string;
    name: string;
    tagName: keyof HTMLElementTagNameMap;
    allowedAttributes: string[];
}

class BlockElement extends BaseElement {

};

class InlineElement extends BaseElement {};

export type Layout = 'standard' | 'flexible';

interface CanvasOptions {
    resize?: boolean;
    presetDimension?: {
        alias?: string;
        dimension: [number, number];
    }[];
    dividingRule?: boolean;
}

type ArtemisOptions = {
    canvas?: CanvasOptions;
    layout?: Layout;
    defaultContent?: ContentRoot,
    beforeMount?: () => void;
    beforeDestroy?: () => void;
}

export type {
    Element,
    BlockElement,
    InlineElement,
    ArtemisOptions,
}