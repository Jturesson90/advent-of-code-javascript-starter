import { puzzleA, puzzleB } from '../src/days/Day07'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '07'
test('day07 puzzle a', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day07 puzzle b', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
