import React, { Component } from "react";
import styled from "styled-components";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

const Wrapper = styled.div`
    padding: 8px 8px;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <CssBaseline />
                <Typography variant="display2">How is the Weather?</Typography>
                <Typography variant="subheading">Get a five-day forecast in your favorite cities.</Typography>
                <SearchBar />
                <WeatherList />
            </Wrapper>
        )
    }
}

export default App;
