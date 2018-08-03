import * as React from 'React';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';

import ColorPickerStore, { Color } from './../store';
import ColorBox from './ColorBox';

@inject("store")
@observer
export default class Palette extends React.Component<{ store?: ColorPickerStore }, {}> {

    renderColor(color: Color) {
        return <div style={{display: 'inline-block'}}>
            <ColorBox key={color.key} color={color} width="40px" height="40px" />
        </div>
    }

    render() {
        return <div>
            {_.map(this.props.store.colorPalette, this.renderColor)}
        </div>;
    }

}