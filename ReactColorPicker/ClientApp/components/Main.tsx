import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Provider, observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

import TwoDimensionalPicker from './TwoDimensionalPicker';
import RawPicker from './RawPicker';
import ColorBox from './ColorBox';
import Palette from './Palette';
import Raw from './Raw';

import Store from './../store';

const store = new Store();

@observer
export class Main extends React.Component<RouteComponentProps<any>, any> {

    addToPalette() {
        store.addToPalette();
    }

    public render() {
        return <Provider store={store}>
            <div>
                <div className="row">
                    <div className="col-md-9">
                        {/*<TwoDimensionalPicker />*/}
                        <RawPicker />
                    </div>
                    <div className="col-md-3">
                        <ColorBox color={store.previewColor} height="200px" width="200px" />
                        <Button onClick={this.addToPalette}>Add to Palette</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <Palette />
                    </div>
                </div>
            </div>
        </Provider>;
    }
}
