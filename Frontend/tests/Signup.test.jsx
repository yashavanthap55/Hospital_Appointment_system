import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Appcontext } from '../src/context/Appcontext'
import SignUp from '../src/pages/SignUp'

describe('SignUp Component', () => {
  const mockSetIsLogin = vi.fn()

  const renderWithContext = () => {
    render(
      <Appcontext.Provider value={{ Setislogin: mockSetIsLogin }}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Appcontext.Provider>
    )
  }

  test('renders signup form correctly', () => {
    renderWithContext()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  test('submits form data', async () => {
    renderWithContext()
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' }
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '123456' }
    })
    fireEvent.click(screen.getByRole('button', { name: /create account/i }))
  })
})
