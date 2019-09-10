export const varity = (obj, propty) => {
    return obj.reduce(function(acc, cur) {
        let key = cur[propty];
        if (!acc[key]) {
            acc[key] = [];
        } else {
            acc[key].push[cur];
        }
        return arr
    }, {})
}