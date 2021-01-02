import { Component } from "react";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      ratings: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewBook(this.state);
    this.setState({
      title: "",
      author: "",
      ratings: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className="">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </div>
        <div className="">
          <label htmlFor="ratings">Ratings</label>
          <input
            type="text"
            name="ratings"
            onChange={this.handleChange}
            value={this.state.ratings}
          />
        </div>
        <button type="submit">Add favybook</button>
      </form>
    );
  }
}

export default AddBook;
