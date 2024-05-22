import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import {
  IMakeCheckoutUseCase,
  SearchOrdersUseCase,
} from '@core/application/use-cases'
import { IOrderController } from './types/controllers'
import { HttpResponseHelper } from '../helpers'

export class OrderController implements IOrderController {
  constructor(
    private readonly makeCheckoutUseCase: IMakeCheckoutUseCase,
    private readonly searchOrdersUseCase: SearchOrdersUseCase,
  ) {}

  async makeCheckout(
    request: ExpressRequest,
    response: ExpressResponse,
  ): Promise<ExpressResponse> {
    try {
      console.log('Rota: ', {
        url: request.url,
        method: request.method,
        body: request.body,
        params: request.params,
      })
      const data = await this.makeCheckoutUseCase.execute({})
      return HttpResponseHelper.onSucess(response, data)
    } catch (error) {
      return HttpResponseHelper.onError(response, { error })
    }
  }

  async searchOrders(
    request: ExpressRequest,
    response: ExpressResponse,
  ): Promise<ExpressResponse> {
    try {
      console.log('Rota: ', {
        url: request.url,
        method: request.method,
        body: request.body,
        params: request.params,
      })
      const data = await this.searchOrdersUseCase.execute({})
      return HttpResponseHelper.onSucess(response, data)
    } catch (error) {
      return HttpResponseHelper.onError(response, { error })
    }
  }
}