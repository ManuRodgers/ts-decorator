import 'reflect-metadata';
import collectionInstance from './Collection';

export function ConstructorParameterDecorator(injectId: string): ParameterDecorator {
  return (target: object, propertyKey: string | symbol, parameterIndex: number): void => {
    console.log('-> target', target);
    const parameterTypes = Reflect.getMetadata('design:paramtypes', target);
    const parameterType = parameterTypes[parameterIndex];
    console.log('-> parameterType', parameterType);
    const parameterIntance = new parameterType();
    collectionInstance.add(injectId, parameterIntance);
  };
}
