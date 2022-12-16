export function changeValue(e) {
I    return{
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}