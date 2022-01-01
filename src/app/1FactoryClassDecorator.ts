type AnyFactoryConstructor = new (...args: any) => any;
function LoggerInfoDecorator<T extends AnyFactoryConstructor>(TargetClass: T) {
  return class extends TargetClass {
    constructor(...args: any) {
      super(...args);
      console.log('Logger info for: ', (TargetClass as any).name);
    }

    public methodDone() {
      console.log(this.name);
    }
  };
}

@LoggerInfoDecorator
class Test {
  name!: string;
  age!: number;
  // 1.先执行原来构造函数
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name, '吃饭');
  }
}

const test = new Test('Manu');
test.eat();
(test as any).methodDone();

type GenericFactory<T> = new (...args: any) => T;
const LoggerSonClass = LoggerInfoDecorator<GenericFactory<Test>>(Test);

const loggerSonClass = new LoggerSonClass('Manu');
loggerSonClass.methodDone();
