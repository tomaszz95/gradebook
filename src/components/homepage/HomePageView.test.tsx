import HomepageView from './HomepageView'
import { render, screen } from '@testing-library/react'

describe('HomePageView - Rendering', () => {
	it("should have 'Welcome to Gradebook!' text", () => {
		render(<HomepageView />)
		expect(screen.getByText('Welcome to Gradebook!')).toBeInTheDocument()
	})
	it("should have 'Student' text", () => {
		render(<HomepageView />)
		expect(screen.getByText('Student')).toBeInTheDocument()
	})
	it("should have 'Teacher' text", () => {
		render(<HomepageView />)
		expect(screen.getByText('Teacher')).toBeInTheDocument()
	})
})
