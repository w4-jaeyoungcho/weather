
import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Paper from "@material-ui/core/Paper";

// import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from "../components/Chart";

class WeatherList extends Component {

    render() {

        const rows = this.props.weather.map((cityData) => {
            const temps = cityData.list.map((item) => item.main.temp);
            // console.log(temps);
            const pressures = cityData.list.map((item) => item.main.pressure);
            const humidities = cityData.list.map((item) => item.main.humidity);

            return (
                <TableRow key={cityData.city.id}>
                    <TableCell>{cityData.city.name}</TableCell>
                    <TableCell padding="dense"><Chart data={temps} color="red" /></TableCell>
                    <TableCell padding="dense"><Chart data={pressures} color="green" /></TableCell>
                    <TableCell padding="dense"><Chart data={humidities} color="blue" /></TableCell>
                </TableRow>
            );
        });

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell>Temperature</TableCell>
                            <TableCell>Pressure</TableCell>
                            <TableCell>Humidity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
    };
}

export default connect(mapStateToProps)(WeatherList);
