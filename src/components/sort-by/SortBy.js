import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { sortBy } from "../../actions/sortingActions";

class SortBy extends Component {

  handleSortBy = selectedValue => {
    if (selectedValue !== null) {
      this.props.sortBy(selectedValue.value);
    } else {
      this.props.sortBy("");
    }
  };

  render() {
    return (
      <Select
        name="collection-sorting"
        value={this.props.sortByValue}
        placeholder={"Sort by"}
        autosize={true}
        onChange={this.handleSortBy}
        options={[
          { value: "best_sellers", label: "Best Sellers" },
          { value: "lowest_price", label: "Price: Low to High" },
          { value: "highest_price", label: "Price: High to Low" },
          { value: "top_rated", label: "Top Rated" },
          { value: "newest", label: "Newest" }
        ]}
      />
    );
  }
}

const mapStateToProps = ({ sorting }) => ({
  sortByValue: sorting.sortBy
});

export default connect(mapStateToProps, { sortBy })(SortBy);
