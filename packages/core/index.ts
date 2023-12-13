import Artemis from './src/foundation/Artemis';

const createArtemis = function (root: string | HTMLElement) {
    const artemis = new Artemis();
    artemis.init(root);
}

export {
    createArtemis
};