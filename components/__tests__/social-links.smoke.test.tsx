import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialLinks } from '../SocialLinks'

describe('SocialLinks', () => {
  it('renders key socials', () => {
    render(<SocialLinks />)
    expect(screen.getByText('GitHub')).toBeTruthy()
    expect(screen.getByText('Discord')).toBeTruthy()
  })
})

