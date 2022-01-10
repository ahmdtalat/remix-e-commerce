type ValidationError = {
  username?: boolean
  password?: boolean
  email?: boolean
}

type RegisterForm = {
  email?: string
  username: string
  password: string
  isSignup?: boolean
}

export const validateUser = ({ username, password, email, isSignup }: RegisterForm): ValidationError | null => {
  const validationErrors: ValidationError = {}
  if (username.trim() === '') validationErrors.username = true
  if (password.trim() === '') validationErrors.password = true
  if (isSignup) {
    if (email?.trim() === '') validationErrors.email = true
  }
  if (Object.keys(validationErrors).length) return validationErrors
  return null
}
