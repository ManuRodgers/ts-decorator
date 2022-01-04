// 3 UserService业务类
export default class UserService {
  constructor() {
    console.log('UserService构造器');
  }
  public pname = '人民';
  public login() {
    console.log(this.pname + '登录....');
  }
}
