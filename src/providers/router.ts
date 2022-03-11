import {Express} from 'express';
import * as controllers from '../controllers/controller';

function router(app: Express) {
  const userRoute = '/user';

  app.get(userRoute, controllers.UsersController.index);
  app.get(userRoute + ':userId', controllers.UsersController.show);
  app.post(userRoute, controllers.UsersController.store);
  app.put(userRoute, controllers.UsersController.update);
  app.delete(userRoute, controllers.UsersController.delete);
  
}

export default router;