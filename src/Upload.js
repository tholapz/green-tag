import React from 'react';
import camera from './camera.svg';

const Upload = React.createClass({
  getInitialState() {
      return {
          file: null,
          imagePreviewUrl:'',
          headline: 'Find out if your cloth is sustainable or not'
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
    this.props.change('share');
  },
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    let CTA = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img role="presentation" src={imagePreviewUrl} />);
        CTA = (<button onClick={this.handleGoToShare}><h1>Analyze It!</h1></button>);
    } else {
      $imagePreview = (<div>Take a picture</div>);
      CTA = (<img style={{width:'80px'}} src={camera} alt="upload photo"/>);
    }
    return (
      <div className="previewComponent" style={{textAlign:'center'}}>
        <h1>{this.state.headline}</h1>
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input style={{display:'none'}} ref="file" className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <br/>
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>
            {CTA}
          </button>
        </form>
        
      </div>
    );
  }
});

export default Upload;
