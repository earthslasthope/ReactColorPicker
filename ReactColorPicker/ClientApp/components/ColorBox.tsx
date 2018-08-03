import * as React from 'React';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { Color, toCss } from './../store';

@observer
export default class ColorBox extends React.Component<{ color: Color, width: string, height: string }> {

    render() {
        const { height, width, color } = this.props;

        return <div style={{
            height: height,
            width: width,
            margin: '10px',
            backgroundColor: toCss(color),
            display: 'inline-block'
        }}></div>;
    }

}