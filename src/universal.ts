import 'core-js/features/promise';
import { polyfills } from '@athoscommerce/snap-preact';

const promises = [];
if (!('fetch' in window)) {
	promises.push(import('whatwg-fetch'));
}
if (!('Symbol' in window) || !('flatMap' in Array.prototype) || !('includes' in Array.prototype)) {
	promises.push(import('core-js/stable'));
}
promises.push(polyfills);
Promise.all(promises).then(() => {
	import('./index');
});
