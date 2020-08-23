import React from 'react';
import InstagramEmbed from "react-instagram-embed";

const instagramURL = 'https://graph.instagram.com/me/media?fields=permalink,caption&access_token=IGQVJVRHpqdGZAOZAlZADYzVXRm5LRnFKcmI0X3BGLW9sOXlndTg1OFFVT2tjamFkLUJwcFRHUnh4TjVuYUdpb1hPR2VhN1dPN3oxVVFCNFhrVDczb0M0WU5idGdIMEZAmY0JDTGdoR1FEbzNiVXJSTk15eAZDZD';//

export class Blog extends React.Component {
    constructor(props)
    {
        super(props);
        document.querySelector("body").classList = [];
        this.state = {
            isLoaded: false,
            data: 'err'
        };
        this.getPosts();
    }

    getPosts()
    {
        try {
            fetch(instagramURL)
                .then(res => res.json())
                .then((result) => { // result contains permalink, caption
                    let posts = result.data;
                    
                    this.setState({
                        isLoaded: true,
                        data: result,
                        posts: posts
                    });
                }
                );
        }
        catch (error) {
            console.error(error);
        }
    }

    render()
    {
        if (!this.state.isLoaded) {
            return (<div>wait</div>);
        }
        let postContent = [];
        for (let i = 0; i < this.state.posts.length; i++)
        {
            
            postContent.push(<Post data = {this.state.posts[i]} />);
        }

        return (<>
            <div className="BlogIntro">
                <h1>@gamedev.adventures</h1>
                Welcome! This is my blog. I make posts on my Instagram page, sharing interesting things that I make and experiment with.<br />
                If my content interests you, please do consider following me on Instagram!
            </div>
            {postContent}
        </>);
    }
}

class Post extends React.Component // this.props.data contains permalink, caption
{
    constructor(props)
    {
        super(props);
        let caption = "" + this.props.data.caption;
        this.state = {
            captionContent: caption.split("FOLLOW", 1)[0]
        };
    }

    render()
    {
        return (
        <div className="postContent">
            <InstagramEmbed 
                url = {this.props.data.permalink}
                maxWidth = {450}
                hideCaption={true}
            />
            <div>{this.state.captionContent}</div>
        </div>);
    }
}