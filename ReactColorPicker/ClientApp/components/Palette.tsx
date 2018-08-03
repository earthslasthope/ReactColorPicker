import * as React from 'React';
import { inject, observer } from 'mobx-react';
import * as _ from 'lodash';

import ColorPickerStore, { Color } from './../store';
import ColorBox from './ColorBox';

@inject("store")
@observer
export default class Palette extends React.Component<{ store?: ColorPickerStore }, {}> {

    colorClicked(e, color: Color) {
        e.preventDefault();

        this.props.store.openColorDetail = color;
    }

    closeClicked(e, color: Color) {
        e.preventDefault();

        this.props.store.removeFromPalette(color);
    }

    renderColor(color: Color) {
        return <div key={color.key} style={{ display: 'inline-block' }}>
            <a href="#" onClick={(e) => { this.colorClicked(e, color) }}><ColorBox color={color} width="40px" height="40px" /></a>
            <a href="#" onClick={(e) => { this.closeClicked(e, color) }} style={{ verticalAlign: 'top' }}>&times;</a>
        </div>
    }

    render() {
        return <div>
            {_.map(this.props.store.colorPalette, this.renderColor.bind(this))}
        </div>;
    }

}