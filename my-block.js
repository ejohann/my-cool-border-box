wp.blocks.registerBlockType('johanne/border-box', {
	title: 'My Cool Border Box',
	icon: 'smiley',
	category: 'common',
	attributes: {
		content: {type: 'string'},
		color: {type: 'string'}
	},
	edit: function(props){
		function updateContent(event){
			props.setAttributes({content: event.target.value})
		}
		function updateColor(value){
			props.setAttributes({color: value.hex})
		}
		return React.createElement("div", null, React.createElement("h3", null, "Your Cool Border Box"), 
			React.createElement("input", 
				{type: "text", value: props.attributes.content, onChange: updateContent}), 
			React.createElement(wp.components.ColorPicker, 
				{color: props.attributes.color, onChangeComplete: updateColor}));
	},
	save: function(props){
		return null
	} 
})