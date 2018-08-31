import _ from 'lodash';
import React from 'react';
import { XYPlot, LineSeries } from 'react-vis';


export default (props) => {
    function average(data) {
        return _.round(_.sum(data.map(dados => dados.y))/data.length);
    }
    return(
        <div>
            <XYPlot 
                height={ props.height } 
                width={ props.width } 
            >
                <LineSeries 
                    data={ props.data }
                    stroke={ props.color }
                    style={{strokeWidth: 3}}
                />
            </XYPlot>
            <div>Average: { average(props.data) } { props.unit }</div>
        </div>
    );
};