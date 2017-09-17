export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/bundles/npm-module-seed.umd.js',
		format: 'umd'
	},
	sourceMap: false,
	name: 'ng.npm-module-seed',
	external: [ 
		'@angular/core',
		'@angular/common',
		'rxjs/Rx'
	] ,
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'rxjs/Observable': 'Rx',
		'rxjs/Rx': 'Rx',
		'rxjs/ReplaySubject': 'Rx',
		'rxjs/add/operator/map': 'Rx.Observable.prototype',
		'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
		'rxjs/add/observable/fromEvent': 'Rx.Observable',
		'rxjs/add/observable/of': 'Rx.Observable'
	}
}
