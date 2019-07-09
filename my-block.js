wp.blocks.registerBlockType('johanne/border-box', {
	title: 'My Cool Border Box',
	icon: 'smiley',
	category: 'common',
	attributes: {
		content: {type: 'string'},
		color: {type: 'string'}
	},
	edit: function(props){
		return wp.element.createElement("div", null, wp.element.createElement("h3", null, "Your Cool Border Box"), 
			wp.element.createElement("input", {type: "text"}));
	},
	save: function(props){
		return null
	} 
})