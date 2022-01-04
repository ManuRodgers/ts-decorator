class StringUtil {
  public static trimSpaces(str: string): string {
    return str.replace(/\s+/g, '');
  }
}
// TODO:
function MethodInterceptor(params: any): MethodDecorator {
  console.log('before method interceptor');
  return (targetClass: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value; // 之前的方法
    //  下面的代码性党羽，可以把方法替换掉
    console.log('in method interceptor');
    descriptor.value = function (...args: any[]) {
      args = args.map((arg) => {
        if (typeof arg === 'string') {
          return StringUtil.trimSpaces(arg);
        }
        return arg;
      });
      // 1.4.总结:这是一种典型的用方法装饰器扩大原来方法功能的案例

      // 1.5 但如果增强原来方法功能后,还想继续执行原来RoleService类中DistribRoles方法
      // 使用apply执行targetMethodSave原来函数
      method.apply(this, args);
    };
    console.log('after method interceptor');
  };
}
class RoleService {
  public roleName = '管理员';
  // constructor() {}

  @MethodInterceptor('DistribRoles方法')
  public distributeRoles(userName: string, isValid: boolean) {
    // 分配角色
    console.log('分配角色.....');
  }
}

const roleService = new RoleService();
roleService.distributeRoles('   张三  ', true);
