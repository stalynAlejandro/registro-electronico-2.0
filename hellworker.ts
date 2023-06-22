import _ from 'lodash';

let num = 2;

self.onmessage = function (event) {
    var { data } = event;
    var count = num * data;

    self.postMessage(count);
};
