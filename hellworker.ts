import _ from 'lodash';

let num = 2;

self.onmessage = function (event) {
    var { data } = event;
    const count = num * data;

    self.postMessage(count);
};
