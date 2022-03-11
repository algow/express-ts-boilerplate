
import {Request, Response, NextFunction} from 'express';

class UsersController {
  index(request: Request, response: Response) {
    return response.status(200).send({
      'message': 'hello world'
    })
  }

  show(request: Request, response: Response) {
    return response.status(200).send({
      'message': 'hello world'
    })
  }

  store(request: Request, response: Response) {
    return response.status(200).send({
      'message': 'hello world'
    })
  }

  update(request: Request, response: Response) {
    return response.status(200).send({
      'message': 'hello world'
    })
  }

  delete(request: Request, response: Response) {
    return response.status(200).send({
      'message': 'hello world'
    })
  }
}

export default new UsersController();