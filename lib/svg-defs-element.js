jvm.SVGDefsElement = function(){
  jvm.SVGDefsElement.parentClass.call(this, 'defs');
}

jvm.inherits(jvm.SVGDefsElement, jvm.SVGElement);

jvm.SVGDefsElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};