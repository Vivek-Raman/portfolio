import React from 'react';
import InstagramEmbed from "react-instagram-embed";

export class Post extends React.Component // {this.props.data} contains permalink, caption
{
    constructor(props) {
        super(props);
        let caption = "" + this.props.data.caption;
        this.state = {
            captionContent: caption.split("FOLLOW", 1)[0]
        };
    }

    render() {
        return (
            <div className="postContent">
                <InstagramEmbed
                    url={this.props.data.permalink}
                    maxWidth={450}
                    hideCaption={true} />
                <div>{this.state.captionContent}</div>
                
            </div>);
    }
}
