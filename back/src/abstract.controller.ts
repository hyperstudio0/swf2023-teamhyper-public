export abstract class AbstractController {
  operationId(_class: object) {
    let className = _class.constructor.name;
    className = className.replace('Controller', '_');
    return className;
  }
}
