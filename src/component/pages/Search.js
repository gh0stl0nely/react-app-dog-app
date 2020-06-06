import React from "react";
import axios from "axios";

class SearchPage extends React.Component{
    state = {
        searchHistory: [],
        breed: "",
        results: []
    }

    searchBreed = async (event) => {
        event.preventDefault();
        const url = `https://dog.ceo/api/breed/${this.state.breed}/images/random/10`
        const result = await axios.get(url);
        this.setState({
            results: result.data.message
        })
    }

    handleChange = (e) => {
        this.setState({
            breed: e.target.value
        })
    }

    render(){
        return (
            <div style={{textAlign: "center"}}>
                <h1>Search by breeds</h1>
                <SearchBar handleChange={this.handleChange} searchBreed={this.searchBreed}/>
                <DisplaySection results={this.state.results}/>
            </div>
        )
    }
}

function SearchBar(props){
    return (
        <form onSubmit={props.searchBreed}  className="form-inline">
            <div style={{margin: "0 auto", marginTop: "20px"}}  className="form-group">
                <input onChange={props.handleChange} placeholder="ex: hound" type="text" id="breed" className="form-control mx-sm-3" aria-describedby="breed" />
                <button type="submit" className="btn btn-primary">Find</button>
            </div>
        </form>
    )
}

function DisplaySection(props){
    const images = props.results.map((animal, index) => {
        return <img style={{marginTop: "20px"}} src={animal} alt="randomDogPic" key={index}></img>
    })

    return (
        <div>
            {images}
        </div>
    )
}

export default SearchPage;