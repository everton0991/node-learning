import { MissingParamError } from '../../errors'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    class ValidationStub {
      validate (_input: any): Error {
        return new MissingParamError('field')
      }
    }
    const validationStub = new ValidationStub()
    const sut = new ValidationComposite([validationStub])
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
