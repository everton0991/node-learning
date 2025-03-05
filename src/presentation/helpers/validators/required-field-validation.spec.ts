import { MissingParamError } from '../../errors'
import { RequireFieldValidation } from './required-field-validation'

const makeSut = (): RequireFieldValidation => {
  return new RequireFieldValidation('field')
}

describe('RequiredFieldValidation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value' })
    expect(error).toBeFalsy()
  })
})
