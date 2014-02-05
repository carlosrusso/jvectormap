jvm.SVGUseElement = function(config, style){
  jvm.SVGUseElement.parentClass.call(this, 'use', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGUseElement, jvm.SVGShapeElement);