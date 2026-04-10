import { describe, it, expect } from 'vitest'
import add from '../src/add.js'

describe('add', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })
})