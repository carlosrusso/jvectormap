jvm.SVGclipPathElement = function(){
  jvm.SVGclipPathElement.parentClass.call(this, 'clipPath');
}

jvm.inherits(jvm.SVGclipPathElement, jvm.SVGElement);

jvm.SVGclipPathElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};