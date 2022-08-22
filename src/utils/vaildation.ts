export type ValidationTypes = 'email' | 'password'

export const validationInput = (
  validationType: ValidationTypes,
  value: string
): boolean => {
  switch (validationType) {
    case 'email':
      return value.indexOf('@') >= 0
    case 'password':
      return value.length >= 8
    default:
      return false
  }
}
