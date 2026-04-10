import { describe, it, expect } from 'vitest'
import eq from '../src/eq.js'
import defaultTo from '../src/defaultTo.js'
import castArray from '../src/castArray.js'
import endsWith from '../src/endsWith.js'

describe('eq', () => {
  it('returns true for equal primitive values', () => {
    expect(eq('a', 'a')).toBe(true)
  })

  it('returns false for different values', () => {
    expect(eq('a', 'b')).toBe(false)
  })
})

describe('defaultTo', () => {
  it('returns given value when defined', () => {
    expect(defaultTo(5, 10)).toBe(5)
  })

  it('returns default for undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10)
  })

  it('returns default for null', () => {
    expect(defaultTo(null, 10)).toBe(10)
  })
})

describe('castArray', () => {
  it('wraps value in array', () => {
    expect(castArray(5)).toEqual([5])
  })

  it('returns same array if already array', () => {
    expect(castArray([1, 2])).toEqual([1, 2])
  })
})

describe('endsWith', () => {
  it('returns true when string ends with target', () => {
    expect(endsWith('hello', 'o')).toBe(true)
  })

  it('returns false when string does not end with target', () => {
    expect(endsWith('hello', 'x')).toBe(false)
  })
})
