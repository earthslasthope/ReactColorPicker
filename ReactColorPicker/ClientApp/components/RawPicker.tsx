import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import ColorPickerStore, { Color } from '../store';

@inject("store")
@observer
export default class RawPicker extends React.Component<{ store?: ColorPickerStore }, {}> {

    updateColor(e, color: string) {
        this.props.store.previewColor[color] = Number(e.target.value);
    }

    render() {

        const { store } = this.props;

        return <form>
            <FormGroup>
                <ControlLabel>Red</ControlLabel>
                <FormControl type="number" min="0" max="255" value={store.previewColor.red} onChange={(e) => { this.updateColor(e, 'red'); }} />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Green</ControlLabel>
                <FormControl type="number" min="0" max="255" value={store.previewColor.green} onChange={(e) => { this.updateColor(e, 'green'); }} />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Blue</ControlLabel>
                <FormControl type="number" min="0" max="255" value={store.previewColor.blue} onChange={(e) => { this.updateColor(e, 'blue'); }} />
            </FormGroup>
        </form>
  
    }

}