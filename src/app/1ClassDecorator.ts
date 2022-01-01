// decorator without parameters
function FirstClassDecorator(targetClass: any) {
  const targetClassObj = new targetClass();
  targetClassObj.buy();
}

@FirstClassDecorator
class CustomerService {
  constructor(private name: string = 'Manu Rodgers') {}

  public buy() {
    console.log(`${this.name} is buying a new car and paying for ${this.name}`);
  }

  public placeOrder() {
    console.log(`${this.name} is placing an order`);
  }
}
