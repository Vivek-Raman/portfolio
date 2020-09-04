import React from 'react';
import { Post } from './Post';

const instagramURL = 'https://graph.instagram.com/me/media?fields=permalink,caption&access_token=IGQVJVRHpqdGZAOZAlZADYzVXRm5LRnFKcmI0X3BGLW9sOXlndTg1OFFVT2tjamFkLUJwcFRHUnh4TjVuYUdpb1hPR2VhN1dPN3oxVVFCNFhrVDczb0M0WU5idGdIMEZAmY0JDTGdoR1FEbzNiVXJSTk15eAZDZD';//
const postsToLoad = 5;

export class Blog extends React.Component {

    constructor(props)
    {
        super(props);
        document.querySelector("body").classList = [];
        this.state = {
            isLoaded: false,
            displayedPostCount: 5
        };
        this.getPosts();
    }

    getPosts()
    {
        try {
            fetch(instagramURL)
                .then(res => res.json())
                .then((result) => { // result contains permalink, caption
                    this.setState({
                        isLoaded: true,
                        postMetadata: result.data,
                        displayedPostCount: 5,
                    });
                }
                );
        }
        catch (error) {
            console.error(error);
        }
    }

    loadMore()
    {
        this.setState({
            displayedPostCount: this.state.displayedPostCount + postsToLoad
        })
    }

    render()
    {
        if (!this.state.isLoaded) {
            return (<div>wait</div>);
        }

        let postContent = [];
        for (let i = 0; i < this.state.postMetadata.length && i < this.state.displayedPostCount; i++)
        {
            postContent.push(<><hr /><Post data = {this.state.postMetadata[i]} /></>);
        }
        let loader = <hr />;
        if (this.state.displayedPostCount <= this.state.postMetadata.length)
        {
            loader = <div className="LoadMore" onClick={() => this.loadMore()}>Load more</div>;
        }

        return (<>
            <div className="BlogText">
                <h1><a href="https://instagram.com/gamedev.adventures">@gamedev.adventures</a></h1>
                Welcome! This is my blog. I make posts on my Instagram page, sharing interesting things that I make and experiment with.<br />
                If my content interests you, please do consider following me on Instagram!
            </div>
            {postContent}
            {loader}
        </>);
    }
}