import { createContext } from 'react';
import { ArtemisOptions, Element } from '../types/common';

interface ElementsContext {

}

const OptionsContext = createContext<Partial<ArtemisOptions>>({});

const ElementsContext = createContext<ElementsContext>([]);

export {
    OptionsContext,
}