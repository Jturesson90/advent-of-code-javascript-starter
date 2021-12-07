import { puzzleA, puzzleB } from '../src/days/Day01'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '01'

test('day01 puzzle a', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day01 puzzle b', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
