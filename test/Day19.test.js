import { puzzleA, puzzleB } from '../src/days/Day19'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '19'
test('day19 puzzle a', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day19 puzzle b', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
