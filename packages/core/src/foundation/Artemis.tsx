import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../views/App';
import { OptionsContext } from '../context';
import { UndoManager } from '../helper';

import type { BlockElement, InlineElement, ArtemisOptions, Layout } from '../types/common';

const defaultOptions: Partial<ArtemisOptions> = {
    layout: 'standard',
    canvas: {
        resize: false,
    }
}

class Artemis {
    private root: ReactDOM.Root;

    private options: ArtemisOptions;

    private OptionsContext: React.Context<Partial<ArtemisOptions>>;

    private blockElements: BlockElement[];

    private inlineElements: InlineElement[];

    private undoManager: UndoManager

    private layout: Layout;

    constructor (options?: ArtemisOptions) {
        this.options = {...defaultOptions, ...options};

        this.layout = this.options.layout || 'standard';

        this.OptionsContext = OptionsContext;
    }

    init (root: string | HTMLElement) {
        let rootElement: HTMLElement;
        if (typeof root === 'string') {
            const rootById = document.getElementById(root);
            if (!rootById) {
                return;
            }
            rootElement = rootById;
        } else {
            rootElement = root;
        }
        const OptionsContext = this.OptionsContext;
        this.root = ReactDOM.createRoot(rootElement);
        this.root.render(
            <React.StrictMode>
                <OptionsContext.Provider value={this.options}>
                    <App />
                </OptionsContext.Provider>
            </React.StrictMode>,
        );
    }

    destroy () {
        this.options.beforeDestroy?.();
        this.root.unmount();
    }

    registerHooks () {}
}

export default Artemis;