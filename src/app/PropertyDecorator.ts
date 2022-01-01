function loginProperty(attrValue: any): PropertyDecorator {
  console.log(attrValue);

  return function (targetClassPrototype: object, propertyKey: string | symbol) {
    console.log('targetClassPrototype: ', targetClassPrototype);
    console.log('propertyKey: ', propertyKey);
    (targetClassPrototype as any).show();
    (targetClassPrototype.constructor as any).custLevelDescription = function (): void {
      console.log('消费5000元升级为贵宾');
      console.log('消费10000元升级为贵宾,赠送微波炉一个');
    };
    (targetClassPrototype.constructor as any).manu = 'manu';
  };
}

class CustomerService3 {
  public custname = '王五';
  @loginProperty('顾客登记')
  public degree!: string;
  show() {
    console.log('顾客名: hello', this.custname);
  }
}
const customerService = new CustomerService3();
(CustomerService3 as any).custLevelDescription();
