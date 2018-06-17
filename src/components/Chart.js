import React from "react";
import PropTypes from "prop-types";

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data) {
    const sum = data.reduce((acc, v) => acc + v, 0);
    return sum / data.length;
}

const Chart = (props) => {
    return (
        <div>
            <Sparklines data={props.data} height={120} width={180}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" /> 
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    );
};

Chart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.string.isRequired,
};

export default Chart;