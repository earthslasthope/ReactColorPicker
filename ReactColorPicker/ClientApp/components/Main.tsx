import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Provider, observer } from 'mobx-react';
import { Button, Tabs, Tab, Modal } from 'react-bootstrap';
import { AsyncTrunk } from 'mobx-sync';

import TwoDimensionalPicker from './TwoDimensionalPicker';
import RawPicker from './RawPicker';
import SliderPicker from './SliderPicker';
import ColorBox from './ColorBox';
import Palette from './Palette';
import Raw from './Raw';
import ColorDetail from './ColorDetail';

import Store from './../store';

const store = new Store();
const trunk = new AsyncTrunk(store, { storage: localStorage });

trunk.init();

@observer
export class Main extends React.Component<RouteComponentProps<any>, any> {

    addToPalette() {
        store.addToPalette();
    }

    clearPalette() {
        store.clearPalette();
    }

    closeColorDetail() {
        store.openColorDetail = null;
    }

    public render() {
        return <Provider store={store}>
            <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="row">
                    <div className="col-md-9">
                        {/*<TwoDimensionalPicker />*/}
                        <Tabs defaultActiveKey={2} id="picker-tabs">
                            <Tab eventKey={2} title="Slider">
                                <SliderPicker />
                            </Tab>
                            <Tab eventKey={3} title="Raw Value">
                                <RawPicker />
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-md-3">
                        <ColorBox color={store.previewColor} height="200px" width="200px" />
                        <Button bsStyle="primary" onClick={this.addToPalette}>Add to Palette</Button>
                        {store.colorPalette.length > 0 && (<Button onClick={this.clearPalette}>Clear Palette</Button>)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <Palette />
                    </div>
                </div>
                <Modal show={!!store.openColorDetail} onHide={this.closeColorDetail.bind(this)}>
                    <Modal.Header>
                        <Modal.Title>Color Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {store.openColorDetail && <ColorDetail color={store.openColorDetail} />}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeColorDetail.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Provider>;
    }
}
