var flattenArray = function(data) {
	return data.reduce(function iter(r, a) {
		if (a === null) {
			return r;
		}
		if (Array.isArray(a)) {
			return a.reduce(iter, r);
		}
		if (typeof a === 'object') {
			return Object.keys(a).map(k => a[k]).reduce(iter, r);
		}
		return r.concat(a);
	}, []);
}
var data=[1,2,34,[4],[45,6],[[5]],[9]]
console.log(flattenArray(data))
