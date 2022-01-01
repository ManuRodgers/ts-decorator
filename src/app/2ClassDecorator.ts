function SecondClassDecorator(params: any) {
  console.log('params: ', params);
  return (targetClass: any) => {
    const targetClassObj = new targetClass();
    targetClassObj.buy();
  };
}
@SecondClassDecorator('hello mate')
class CustomerService2 {
  constructor(private name: string = 'Manu Rodgers') {}

  public buy() {
    console.log(`${this.name} is buying a new car and paying for it`);
  }

  public placeOrder() {
    console.log(`${this.name} is placing an order`);
  }
}
