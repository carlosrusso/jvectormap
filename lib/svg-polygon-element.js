jvm.SVGPolygonElement = function(config, style){
  jvm.SVGPolygonElement.parentClass.call(this, 'polygon', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPolygonElement, jvm.SVGShapeElement);