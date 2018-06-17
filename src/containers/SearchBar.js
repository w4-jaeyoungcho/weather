import React, { Component } from "react";
import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { fetchWeather } from "../actions";
import { bindActionCreators } from "redux";

const Form = styled.form`
    padding-bottom: 2rem;
`;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    render() {
        return (
            <Form onSubmit={(event) => this.onFormSubmit(event)}>
                <Grid container alignItems="center" spacing={8}>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            label="City"
                            helperText="Seoul is a city."
                            value={this.state.term}
                            onChange={(event) => this.onInputChange(event)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </Form>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: "" });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
