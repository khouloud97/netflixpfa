import React from 'react'
import "./HomeScreen.css"
import Nav from "../Nav"
 import Row from  '../Row';
import requests from  '../requests';
import Banner from  '../Banner';

export function Homescreen() {
    

    return (
        <div className="homeScreen">
<Nav />
<Banner />
      <Row title="NETFLIX ORIGINNALS"  fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/> 
      <Row title="TRENDING NOW"        fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated"           fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies"       fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies"       fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Romance Movies"      fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Horror Movies"       fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Doucumentairees"    fetchUrl={requests.fetchDocumentaries}></Row>
       



        </div>
    )
}
