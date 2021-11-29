import { puzzleA, puzzleB } from '../src/days/Day01'
import { getPuzzleInputText, convertToNumberArray, convertToStringArray } from '../src/puzzleInputs'

test('day01 puzzle a', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = '2'
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day01 puzzle b', () => {
    // Arrange
    const expected = '2'
    const puzzleInput = convertToStringArray(getPuzzleInputText(1))
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day01 example 3', () => {
    // Arrange
    const expected = '2'
    // Act
    const result = puzzleA(puzzleInput, 1)

    // Assert
    expect(result).toBe(expected)
})
