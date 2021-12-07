import { puzzleA, puzzleB } from '../src/days/Day13'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '13'
test('day13 puzzle a', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day13 puzzle b', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
