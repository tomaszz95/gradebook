import AddGradeForm from './AddGradeForm'
import { render, screen } from '@testing-library/react'

describe('AddGradeForm - Rendering', () => {
	it("should have 'Add grade' button", () => {
		render(<AddGradeForm />)
		expect(screen.getByRole('button', { name: 'Click to add grade' })).toBeInTheDocument()
	})
})
