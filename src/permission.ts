import { check, request, RESULTS } from 'react-native-permissions'
export function checkPermission(permission) {
    const res = check(permission).then(result => {
        if (result === RESULTS.GRANTED) {
            return true
        } else if (result === RESULTS.DENIED) {
            return request(permission).then(data => {
                if (data === 'granted') {
                    return true
                } else {
                    return false
                }
            })
        } else if (result === RESULTS.BLOCKED) {
            return false
        } else if (result === RESULTS.UNAVAILABLE) {
            return false
        }
    })
    return res
}
