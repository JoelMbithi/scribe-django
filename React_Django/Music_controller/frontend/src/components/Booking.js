import React, { Component } from "react";
import {
  Grid,
  Typography,
  FormControl,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Booking extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };

    this.handleBookSlot = this.handleBookSlot.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestPauseChange = this.handleGuestPauseChange.bind(this);
  }

  handleVotesChange(e) {
    this.setState({
      votesToSkip: parseInt(e.target.value),
    });
  }

  handleGuestPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true",
    });
  }

  handleBookSlot() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guest_can_pause: this.state.guestCanPause,
        votes_to_skip: this.state.votesToSkip,
      }),
    };

    fetch("/api/booking", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("Booking response:", data))
      .catch((error) => console.error("Booking error:", error));
  }

  render() {
    return (
      <Grid container spacing={1} style={{ maxWidth: 600, margin: "0 auto", padding: 20, justifyContent: "center" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography component="h4" variant="h4">Book PlayList Slot</Typography>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <FormControl component="fieldset">
            <FormHelperText>
              <div style={{ textAlign: "center" }}>Guest can play a slot by choosing an option below:</div>
            </FormHelperText>
            <RadioGroup onChange={this.handleGuestPauseChange} row defaultValue="true" name="play-control-options">
              <FormControlLabel value="true" control={<Radio color="primary" />} label="Play Now" labelPlacement="bottom" />
              <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <FormControl fullWidth>
            <TextField
              onChange={this.handleVotesChange}
              required
              type="number"
              defaultValue={this.defaultVotes}
              inputProps={{ min: 1, style: { textAlign: "center" } }}
              label="Votes Required to Skip Song"
              variant="outlined"
            />
            <FormHelperText style={{ textAlign: "center" }}>
              Minimum votes to skip the current song.
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button onClick={this.handleBookSlot} variant="contained" color="primary">
            Book My Slot
          </Button>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button variant="contained" color="secondary" to="/" component={Link}>
            Back to Home
          </Button>
        </Grid>
      </Grid>
    );
  }
}
