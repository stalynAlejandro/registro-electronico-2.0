import _ from 'lodash';

self.onmessage = function (event) {
    var data = event.data;
    var action = data.action;

    switch (action) {
        case 'init':
            var res = 'init - result to the main';
            postMessage(res);
            break;
        case 'onChange':
            var res = 'onChange - result to the main';
            postMessage(res);
            break;
    }
};
