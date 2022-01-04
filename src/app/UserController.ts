import { ConstructorParameterDecorator } from './ConstructorParameterDecorator';
import UserService from './UserService';
import collectionInstance from './Collection';
import Inject from './Inject';
class UserController {
  @Inject('UserService')
  private userService?: UserService;
  private count?: string;
  // 依赖注入
  // constructor(
  //   @ConstructorParameterDecorator('userService')
  //   private userService?: UserService,
  //   private count?: string
  // ) {}

  public login() {
    const peopleServiceInstace = collectionInstance.get('userService');
    peopleServiceInstace.login();
  }
}
const controller = new UserController();
controller.login();
