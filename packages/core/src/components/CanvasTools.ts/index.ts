import { memo } from 'react';

import type { FC } from 'react';

type Operation = 'save_as_template' | 'download' | 'clear' | 'background';

interface Props {
    disableOperation: Operation[];
}

const CanvasTools: FC<Props> = () => {
    
};

export default memo(CanvasTools);