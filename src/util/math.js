export const triangleNumber = (num, cache = {}) => {
    if (num === 1) return 1
    else if (num < 0) return -1
    else if (num === 0) return 0
    else if (cache[num] !== undefined) return cache[num]
    return (cache[num] = num + triangleNumber(num - 1, cache))
}

export const factorial = (num, cache = {}) => {
    if (num < 0) return -1
    else if (num == 0) return 1
    else if (cache[num] !== undefined) return cache[num]
    return (cache[num] = num * factorial(num - 1, cache))
}

export const manhattanDistance = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1)
