import React, { Component } from "react";

export default class PlayDesk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
        };
        this.PlayDeskCode = this.props.match.params.playDeskCode;
        this.getPlayDeskDetails = this.getPlayDeskDetails.bind(this);
    }

    componentDidMount() {
        this.getPlayDeskDetails();
    }

    getPlayDeskDetails() {
        fetch(`/api/get-room?code=${this.PlayDeskCode}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Room Not Found!");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Room Data:", data);
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                });
            })
            .catch((error) => {
                console.error("Error fetching room:", error.message);
                // You can add a redirect or user-friendly error message here
            });
    }

    render() {
        return (
            <div>
                <h2>Play Desk Code: {this.PlayDeskCode}</h2>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Guest Can Pause: {this.state.guestCanPause ? "Yes" : "No"}</p>
                <p>Is Host: {this.state.isHost ? "Yes" : "No"}</p>
            </div>
        );
    }
}
