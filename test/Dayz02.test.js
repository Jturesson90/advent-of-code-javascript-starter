import { puzzleA, puzzleB } from '../src/days/Day02'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '02'
test('day02 puzzle a', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day02 puzzle b', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
