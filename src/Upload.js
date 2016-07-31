import React from 'react';
import camera from './camera.svg';

const Upload = React.createClass({
  getInitialState() {
      return {
          file: null,
          imagePreviewUrl:'',
          headline: 'Find out if your cloth is sustainable or not',
          paragraph1: 'Join the movement to bring awareness to sustainable clothing to the public. One snapshot at a time!',
          paragraph2: 'Be part of the movement to revert the damage to our planet. Taking picture of you wearing sustainable clothes and get our badge of approval. Feel free to share it on Facebook, Instagram, etc.',

      };
  },
  _handleImageChange(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  },
  _handleSubmit(e) {
    e.preventDefault();
    if ( this.state.imagePreviewUrl ) {
      this.props.change('share');
    } else {
      this.refs.file.click();
    }
  },
  handleGoToShare(e) {
    e.preventDefault();
    this.props.change('share');
  },
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    let CTA = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img role="presentation" src={imagePreviewUrl} />);
        CTA = (<a onClick={this.handleGoToShare}><h1>Analyze It!</h1></a>);
    } else {
      $imagePreview = (
        <div>
          <h3>{this.state.paragraph1}</h3>
          <h3>{this.state.paragraph2}</h3>        
          <p>Take a picture</p>
        </div>
      );
      CTA = (
        <a className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>
          <img style={{width:'80px'}} src={camera} alt="upload photo"/>
        </a>
      );
    }
    return (
      <div className="previewComponent" style={{textAlign:'center'}}>
        <h1>{this.state.headline}</h1>
        <div className="imgPreview">
          {$imagePreview}
        </div>  
        <form>
          <input style={{display:'none'}} ref="file" className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          {CTA}
        </form>
      </div>
    );
  }
});

export default Upload;
