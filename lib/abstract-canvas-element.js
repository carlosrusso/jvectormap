/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create use and add it to the canvas.
 * @param {Object} config Parameters of use to create.
 * @param {Object} style Styles of the use to create.
 * @param {HTMLElement} group Group to add use into.
 */
jvm.AbstractCanvasElement.prototype.addUse = function(config, style, group){
  var el = new jvm[this.classPrefix+'UseElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create line and add it to the canvas.
 * @param {Object} config Parameters of the line to create.
 * @param {Object} style Styles of the line to create.
 * @param {HTMLElement} group Group to add line into.
 */
jvm.AbstractCanvasElement.prototype.addLine = function(config, style, group){
  var el = new jvm[this.classPrefix+'LineElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create polygon and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add polygon into.	
 */
jvm.AbstractCanvasElement.prototype.addPolygon = function(config, style, group){
  var el = new jvm[this.classPrefix+'PolygonElement'](config, style);

  this.add(el, group);
  return el;
};
	
/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};

/**
 * Add group to add another group inside of the canvas containing other elements
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addDefs = function(parentGroup){
 var el = new jvm[this.classPrefix+'DefsElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }

  el.canvas = this;

  return el;
};

/**
 * Create clipPath and add it to a group
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addclipPath = function(parentGroup){
 var el = new jvm[this.classPrefix+'clipPathElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }

  el.canvas = this;

  return el;
};