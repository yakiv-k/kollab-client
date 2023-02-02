import Upload from "../../components/Upload/Upload";
import Header from "../../components/Header/Header";
import { Component } from "react";
import axios from "axios";

import "./UploadPage.scss";

class UploadPage extends Component {
  state = {
    projectStemFiles: null,
    projectImage: "",
    track: null,
    // isUploaded: false
  };

  // GRAB PROJECT FILE(S)
  handleFileChange = (event) => {
    event.preventDefault();
    this.setState({
      projectStemFiles: event.target.files,
    });
  };

  // GRAB IMAGE FILE
  handleImageChange = (event) => {
    event.preventDefault();
    this.setState({
      projectImage: event.target.files,
    });
  };

  // GRAB TRACK
  handleTrackChange = (event) => {
    event.preventDefault();
    this.setState({
      track: event.target.files,
    });
  };
  handleFilesUpload = (event) => {
    event.preventDefault();

    // NEW INSTANCE
    const formData = new FormData();

    // formData.append("name", event.target.name.value);
    formData.append("title", event.target.title.value);
    formData.append("bpm", event.target.bpm.value);
    formData.append("caption", event.target.caption.value);

    for (const file of this.state.projectImage) {
      formData.append("image", file);
    }

    Object.values(this.state.track).map((file) => {
      formData.append("track", file);
    });
    Object.values(this.state.projectStemFiles).map((file) => {
      formData.append("stems", file);
    });

    const token = sessionStorage.getItem("token");

    axios
      .post(
        "https://web-production-5250.up.railway.app/tracks",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        {
          header: { "Content-Type": "multipart/form-data" },
        }
      ).then((resonse) => {

      })
      .catch((err) => {
        console.log(err);
      });

      this.props.history.push("/tracks");
  };

  render() {
    return (
      <>
        <Header />
        <section className="upload-page">
          <Upload
            uploadFiles={this.handleFilesUpload}
            trackHandler={this.handleTrackChange}
            ImageHandler={this.handleImageChange}
            filesHandler={this.handleFileChange}
          />
        </section>
      </>
    );
  }
}

export default UploadPage;
