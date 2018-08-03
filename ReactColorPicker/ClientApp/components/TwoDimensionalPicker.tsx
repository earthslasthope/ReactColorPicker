import * as React from 'React';
import _ from 'lodash';

export default class TwoDimensionalPicker extends React.Component {

    render() {
        const minValue = 0;
        const maxValue = 255;

        const range = _.range(minValue, maxValue);

        return <div>
            {_.map(range, yValue => (
                <div>
                    {_.map(range, xValue => (
                        <span>{xValue},{yValue}</span>
                    ))}
                </div>
            ))}
        </div>;
    }

}