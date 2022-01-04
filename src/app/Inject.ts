import 'reflect-metadata';
import collectionInstance from './Collection';

export default function Inject(injectId: string): PropertyDecorator {
  return function (targetClassPrototype: object, propertyKey: string | symbol) {
    const InjectTargetType = Reflect.getMetadata('design:type', targetClassPrototype, propertyKey);
    console.log('-> InjectTargetType', InjectTargetType);
    collectionInstance.add(injectId, new InjectTargetType());
  };
}
