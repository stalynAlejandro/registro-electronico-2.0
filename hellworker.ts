import _ from 'lodash';

const ctx: Worker = self as any;

ctx.addEventListener('message', event => {
    postMessage('Worker done !');
});
