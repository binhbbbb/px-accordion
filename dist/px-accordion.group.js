'use strict';(function(){Polymer({is:'px-accordion-group',properties:{_expandCollapse:{type:String,value:'collapse',observer:'_onExpandCollapse',reflect:true},collapse_active:{type:String,value:'active'},expand_active:{type:String,value:''}},_onExpandCollapse:function _onExpandCollapse(val){if(val=='collapse'){this.collapse_active='active';this.expand_active=''}else{this.collapse_active='';this.expand_active='active'}},_expandCollapseListener:function _expandCollapseListener(e){this.set('_expandCollapse',e.currentTarget.dataset.val);if(e.currentTarget.dataset.val==='expand'){for(var i=0;i<this.accordionsDefined.length;i++){this.accordionsDefined[i].$$('iron-collapse').show();this.accordionsDefined[i].set('chevron',this.accordionsDefined[i].chevronIcons.less)}}else{for(var i=0;i<this.accordionsDefined.length;i++){this.accordionsDefined[i].$$('iron-collapse').hide();this.accordionsDefined[i].set('chevron',this.accordionsDefined[i].chevronIcons.more)}}},_getAccordionDefinitions:function _getAccordionDefinitions(accordionSet){this.accordionsDefined=accordionSet.addedNodes.filter(function(node){return node.nodeType===Node.ELEMENT_NODE&&node.nodeName==='PX-ACCORDION'})},hasClass:function hasClass(element,cls){return(' '+element.className+' ').indexOf(' '+cls+' ')>-1},ready:function ready(){var boundHandler=this._getAccordionDefinitions.bind(this);this._observer=Polymer.dom(this.$.accordions).observeNodes(boundHandler)}})})();
//# sourceMappingURL=px-accordion.group.js.map