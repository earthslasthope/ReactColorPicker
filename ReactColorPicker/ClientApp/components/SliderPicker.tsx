import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorPickerStore, { Color } from '../store';

@inject("store")
@observer
export default class SliderPicker extends React.Component<{ store?: ColorPickerStore }, {}> {

    updateColor(value, color: string) {
        this.props.store.previewColor[color] = value;
    }

    render() {

        const { store } = this.props;

        return <form>
            <FormGroup>
                <ControlLabel>Red</ControlLabel>
                <Slider min={0} max={255} value={store.previewColor.red} onChange={value => { this.updateColor(value, 'red'); }} />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Green</ControlLabel>
                <Slider min={0} max={255} value={store.previewColor.green} onChange={value => { this.updateColor(value, 'green'); }} />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Blue</ControlLabel>
                <Slider min={0} max={255} value={store.previewColor.blue} onChange={value => { this.updateColor(value, 'blue'); }} />
            </FormGroup>
        </form>

    }

}