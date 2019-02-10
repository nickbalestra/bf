import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import * as GooglePhoto from "react-google-photo";
import { photos } from "./data";

export class Photos extends Component {
  state = {
    index: 0,
    open: false
  };

  handleClickPrev = () => {
    this.setState({ index: this.state.index - 1 });
  };

  handleClickNext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickGallery = (e: any, data: any) => {
    this.setState({ open: true, index: data.index });
  };

  render() {
    const { open, index } = this.state;
    return (
      <div>
        <Gallery
          photos={photos}
          onClick={this.handleClickGallery}
          columns={4}
        />
        <GooglePhoto
          open={open}
          src={photos}
          srcIndex={index}
          onClickPrev={this.handleClickPrev}
          onClickNext={this.handleClickNext}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Photos;
