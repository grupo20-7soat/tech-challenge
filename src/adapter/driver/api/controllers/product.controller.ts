import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import {
  ICreateProductUseCase,
  IRemoveProductUseCase,
  ISearchProductUseCase,
  IUpdateProductUseCase,
} from '@core/application/use-cases'
import { IProductController } from './types/controllers'
import { HttpResponseHelper } from '../helpers'

export class ProductController implements IProductController {
  constructor(
    private readonly createProductUseCase: ICreateProductUseCase,
    private readonly updateProductUseCase: IUpdateProductUseCase,
    private readonly searchProductUseCase: ISearchProductUseCase,
    private readonly removeProductUseCase: IRemoveProductUseCase,
  ) {}

  async createProduct(
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
      const data = await this.createProductUseCase.execute({})
      return HttpResponseHelper.onSucess(response, data)
    } catch (error) {
      return HttpResponseHelper.onError(response, { error })
    }
  }

  async updateProduct(
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
      const data = await this.updateProductUseCase.execute({})
      return HttpResponseHelper.onSucess(response, data)
    } catch (error) {
      return HttpResponseHelper.onError(response, { error })
    }
  }

  async searchProduct(
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
      const data = await this.searchProductUseCase.execute({})
      return HttpResponseHelper.onSucess(response, data)
    } catch (error) {
      return HttpResponseHelper.onError(response, { error })
    }
  }

  async removeProduct(
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
      const data = await this.removeProductUseCase.execute({})
      return HttpResponseHelper.onSucess(response, data)
    } catch (error) {
      return HttpResponseHelper.onError(response, { error })
    }
  }
}