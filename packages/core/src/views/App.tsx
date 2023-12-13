import React, { memo, useContext } from "react";
import { OptionsContext } from '../context';

const App = () => {
    const { canvas } = useContext(OptionsContext);
    return <div>1</div>
};

export default memo(App);