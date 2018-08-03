import * as React from 'React';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import colorNamer from 'color-namer';

import { Color, toHex } from './../store';

import ColorBox from './ColorBox';

@observer
export default class ColorDetail extends React.Component<{ color: Color }> {

    getNames(color: Color) {
        const hexValue = toHex(color);

        let names = colorNamer(hexValue);
        let filteredNames = _.filter(names.basic, x => x.distance < 35); 

        if (filteredNames.length === 0) {
            return 'Unknown';
        }

        return _.join(_.map(filteredNames, x => x.name), ', ');
    }

    render() {
        const { color } = this.props;

        const hexValue = toHex(color);

        return <div>
            <ColorBox color={color} height="200px" width="300px" />
            <dl className="dl-horizontal">
                <dt>HEX values</dt>
                <dd>{hexValue}</dd>

                <dt>Name(s)</dt>
                <dd>{this.getNames(color)}</dd>
            </dl>
        </div>;
    }

}