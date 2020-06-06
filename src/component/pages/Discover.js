import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const styles = {
    centered: {
        textAlign: "center", 
        "marginTop": "2%"
    },
    buttoned: {
        width: "50%",
        borderRadius: "30px"
    }
}
class DiscoverPage extends React.Component{
    state = {
        friends: 0,
        src: ""
    }

    searchRandomImage = () => {
        axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
            this.setState({
               src: res.data.message
            })
        }
    )
}  
    // There is 1/5 chance the dog likes you back
    calculateMutualConnectionOdds = () => {
        const odds = Math.floor(Math.random() * 5) + 1;
        if(odds === 1){
            alert("Dog likes you back <3");
            return this.setState({
                friends: this.state.friends + 1
            })
        }   
    }

    handleLike = (event) => {
        if(event.target.id === "likeBtn"){
            // Like button is clicked
            this.calculateMutualConnectionOdds();
            this.searchRandomImage();
        } else {
            // Dislike button is clicked
            this.searchRandomImage();
        }
    }

    componentDidMount(){
        this.searchRandomImage();
    }

    render(){
        return (
            <div>
                <h2 style={styles.centered}>You have {this.state.friends} friends</h2>
                <p style={styles.centered}>You have 1/5 chance of the dog liking you back :)</p>
                <Card src={this.state.src} handleLike={this.handleLike}/>
            </div>
 
        )
    }
}

function Card(props){
    return (
        <div className="card" style={{width: "80%", margin: "0 auto", "marginTop": "2%"}}>
            <img src={props.src} style={{width: "55%",margin: "0 auto", marginTop: "1%", borderRadius: "30px"}} className="card-img-top" alt="dogPics" />
            <div className="card-body">
                <div>
                    <ThumbUpButton handleLike={props.handleLike} />
                    <ThumbDownButton handleLike={props.handleLike} />
                </div>
            </div>
        </div>
    )
}

function ThumbUpButton(props){

    return (
        <button id="likeBtn" onClick={props.handleLike} style={styles.buttoned} className="btn btn-primary">Cute <FontAwesomeIcon icon={faThumbsUp}/></button>
    )
}

function ThumbDownButton(props){ 
    return (
        <button id="dislikeBtn" onClick={props.handleLike} style={styles.buttoned} className="btn btn-secondary">Meh <FontAwesomeIcon icon={faThumbsDown}/></button>
    )
}

export default DiscoverPage;