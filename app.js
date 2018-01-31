// // TODO
// var Broccoli = () => (
// 	<li>Broccoli</li>
// );

// var TurkeyJerky = () => (
// 	<li>Turkey Jerky</li>
// );






class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			found: false,
		}
	}

	onItemHover () {
		this.setState({
			found: !this.state.found
		});
	}

	render () {
		var style = {
			fontWeight: this.state.found ? 900 : 100
		}

		return (
			<li style={style} 
				onMouseOver={this.onItemHover.bind(this)}
				onMouseLeave={this.onItemHover.bind(this)}>	
					{this.props.grocery}
			</li>
		)
	}

}

var GroceryList = (props) => (

	<ul>
		{props.groceries.map( grocery => 
			<GroceryListItem grocery={grocery} />
		)}
	</ul>
);


var App = () => (
	<div>
		<h2>Groceries</h2>
		<GroceryList groceries={['broccoli', 'cheddar', 'onion']} />
	</div>
);

ReactDOM.render(<App />, document.getElementById("app"));
