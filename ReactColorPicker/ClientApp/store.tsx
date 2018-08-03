import { observable, computed, action } from 'mobx';
import _ from 'lodash';
import uuid from 'uuid/v4';

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

export default class ColorPickerStore {
    @observable previewColor: Color = { key: 'preview', red: 64, green: 64, blue: 64, opacity: 1.0 };
    @observable colorPalette: Array<Color> = [];

    @computed get previewCssColor(): string {
        return toCss(this.previewColor);
    }

    @action addToPalette() {
        var item = _.clone(this.previewColor);
        item.key = uuid();
        this.colorPalette.push(_.clone(item));
    }

    toCss(color: Color) {
        return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`;
    }
}