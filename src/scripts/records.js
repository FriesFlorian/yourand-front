'use strict';

import Immutable from 'immutable';

export class ChannelRecord extends Immutable.Record({
    id: null,
    name: null,
    thumbnail: null
}) {
    label() { return this.get('name'); }
}
