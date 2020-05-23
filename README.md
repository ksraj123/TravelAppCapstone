# Take me Anywhere Travel App

- Author - Kumar Saurabh Raj
- Technologies Used - NodeJS, express, APIs, NLP, webpack, jest, workbox, SaSS, Semantic UI

## Introduction

Several APIs are used in this application to present to the user valuable data which would help him in planning his next trip. It is similar to a progressive web app and all parts of the app other the fetching results from the API are functional offline.

## Get Up and Running

First clone this repo using the following command

    git clone <The Repo Link here>

Sign up on Weatherbit, Pixabay and Geonames for getting the API ids and keys
then create a `.env` file in the project root of the following format

    WEATHERBIT_API_KEY=<Paste Weatherbit Api key here>
    PIXABAY_API_KEY=<Paste Pixabay Api key here>
    GEONAMES_USER_NAME=<Paste Geonames user name here>

`cd` into your project folder and run:

- ```npm install```
- ```npm start``` to start the app
- this app runs on localhost:8080, but you can of course edit that in server.js