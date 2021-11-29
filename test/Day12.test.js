import { puzzleA, puzzleB } from '../src/days/Day12'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '12'
test('day12 puzzle a', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day12 puzzle b', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
