import { observable, computed, action } from 'mobx';
import { ignore } from 'mobx-sync';
import * as _ from 'lodash';
import uuid from 'uuid/v4';
import rgbHex from 'rgb-hex';

export interface Color {
    key: string;
    red: Number;
    green: Number;
    blue: Number;
    opacity: Number;
}

export function toCss(color: Color) {
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`;
}

export function toHex(color: Color) {
    return '#' + rgbHex(color.red, color.green, color.blue);
}

export default class ColorPickerStore {
    @ignore @observable previewColor: Color = { key: 'preview', red: 127, green: 127, blue: 127, opacity: 1.0 };
    @observable colorPalette: Array<Color> = [];
    @observable openColorDetail?: Color = null;

    @computed get previewCssColor(): string {
        return toCss(this.previewColor);
    }

    @action addToPalette() {
        var item = _.clone(this.previewColor);
        item.key = uuid();
        this.colorPalette.push(_.clone(item));
    }

    @action removeFromPalette(color: Color) {
        _.remove(this.colorPalette, x => x.key === color.key);
    }

    @action clearPalette() {
        this.colorPalette = [];
    }

    toCss(color: Color) {
        return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`;
    }
}