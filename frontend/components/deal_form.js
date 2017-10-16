import React from 'react';

class DealForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: "",
      dealType: "",
      dealSize: "",
      isPublished: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const deal = Object.assign({}, this.state, { id: new Date().getTime() });
    this.props.receiveDeal(deal);
    this.setState({
      institution: "",
      dealType: "",
      dealSize: "",
      isPublished: false,
    });
  }

  render() {
    return (
      <form className="deal-form" onSubmit={this.handleSubmit}>
        <div>
          <label>Institution:
            <input
              className="input"
              ref="institution"
              value={this.state.institution}
              placeholder="LS Credit Union"
              onChange={this.update('institution')}
              required/>
          </label>
        </div>
        <div>
          <label>Deal Type:
            <input
              className="input"
              ref="dealType"
              value={this.state.dealType}
              placeholder="Consumer Auto"
              onChange={this.update('dealType')}
              required/>
          </label>
        </div>
        <div>
          <label>Deal Size:
            <input
              className="input"
              ref="dealSize"
              value={this.state.dealSize}
              placeholder="$1,000,000"
              onChange={this.update('dealSize')}
              required/>
          </label>
        </div>
        <button className="create-button">Create Deal</button>
      </form>
    );
  }
};

export default DealForm;
