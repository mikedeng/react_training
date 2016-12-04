import $ from 'jquery'
export default class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.setState({position: 0 })
  }

  componentDidMout(){
  	$(window).scroll( () => {
  	  let s = $(window).scrollTop(),
	  d = $(document).height(),
	  c = $(window).height();
  	  this.setState({position: (s / (d - c)) * 100})
  	});
  }

  render() {
    const dup_items = [...Array(150).keys()];
    return (
    	<h1>Progress</h1>
    	<progress id="progressbar" value={this.sate.position} max="100"></progress>
    	{dup_items.map(item => (Lorem <br />))}
     );
  }
}

