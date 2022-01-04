import 'reflect-metadata';

@Reflect.metadata('role', 'admin')
class People {
  private readonly name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @Reflect.metadata('eat', 'food')
  public eat(): void {
    console.log(`${this.name} is eating`);
  }
}

class ChinesePeople extends People {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public sayHello(): void {
    console.log(`ChinesePeople is saying hello`);
  }
}

console.log(Reflect.getMetadata('role', People));
console.log(Reflect.getMetadata('eat', People.prototype, 'eat'));
console.log(Reflect.hasMetadata('eat', ChinesePeople.prototype, 'eat'));
console.log(Reflect.hasOwnMetadata('eat', ChinesePeople.prototype, 'eat'));
