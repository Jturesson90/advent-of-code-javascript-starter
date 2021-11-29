import { puzzleA, puzzleB } from '../src/days/Day18'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '18'
test('day18 puzzle a', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day18 puzzle b', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
