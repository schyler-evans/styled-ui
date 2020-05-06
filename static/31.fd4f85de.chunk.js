webpackJsonp([31],{2066:function(e,n,t){var a=t(0),o=t(91),r=t(447).PageRenderer;r.__esModule&&(r=r.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(2139)}},componentWillMount:function(){},render:function(){return a.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},2139:function(e,n){e.exports='`Box` is a primitive layout component similar to a `div`. Layout styling can be applied directly via props, which also allows easy access to theme data.\n\n### Example\n\n```react\nshowSource: true\n---\n<Box display="flex" height="100px" boxShadow={1}>\n\t<Box flex={1} bg="blue1" borderRight={1} />\n\t<Box width="200px" bg="green1" />\n</Box>\n```\n\n## Theming\n\nStyle prop values are theme-aware. For named theme values like color, strings values will be looked up in the theme object under that name. Numeric values can be used to reference indexed theme scales like spacing.\n\n```react\nshowSource: true\n---\n<Box\n\tborder={1}\n\tpadding={3}\n\tcolor="teal5"\n>\n\tI have a padding of 8px corresponding to the spacing value at index 3,with a background color of #009e74, corresponding to the theme color named "teal5".\n</Box>\n```\n\n### Responsive styling\n\nPass arrays of values corresponding to the styles to apply at various breakpoints.\n\n```react\nshowSource: true\n---\n<Box\n\tborder={1}\n\tpadding={[2, 3]}\n\tbg={[null, \'blue1\', \'purple1\']}\n>\n\tI have a padding of 4px at the smallest breakpoint, and 8px at larger viewport widths. Background color is unset at the smallest breakpoint, blue1 at the medium breakpoint, and purple1 on larger viewports.\n</Box>\n```\n'}});
//# sourceMappingURL=31.fd4f85de.chunk.js.map