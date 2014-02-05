jvm.SVGLineElement = function(config, style){
  jvm.SVGLineElement.parentClass.call(this, 'line', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGLineElement, jvm.SVGShapeElement);