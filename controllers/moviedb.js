const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', async (req, res, next) => {
  // let search = 'https://api.themoviedb.org/3/search/movie?api_key=47df963032e8e73047bd6c3d0999c3c0&query=drishyam&region=IN';
  // let img = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
  // let tvShows = 'https://api.themoviedb.org/3/search/tv?api_key=47df963032e8e73047bd6c3d0999c3c0&query=kapil&region=IN'
  let movieapi = await fetch('https://api.themoviedb.org/3/discover/movie/?api_key=47df963032e8e73047bd6c3d0999c3c0&sort_by=popularity.desc&region=IN&page=1');
  movieapi = await movieapi.json();
  res.render('home', {
    title: 'MovieBee',
    data: movieapi.results,
    page: 2
  })  
})

router.get('/tv', async (req, res, next) => {
  let movieapi = await fetch('https://api.themoviedb.org/3/discover/tv/?api_key=47df963032e8e73047bd6c3d0999c3c0&sort_by=popularity.desc&region=hi-IN&page=1');
  movieapi = await movieapi.json();
  res.render('tv', {
    title: 'MovieBee',
    data: movieapi.results,
    page: 2,
  })
})

router.get('/movie/page/:page', async (req, res, next) => {
  let movieapi = await fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=47df963032e8e73047bd6c3d0999c3c0&sort_by=popularity.desc&region=IN&page=${req.params.page}`);
  movieapi = await movieapi.json();
  res.render('home', {
    title: 'MovieBee',
    data: movieapi.results,
    page: parseInt(req.params.page) + 1
  })
})

router.get('/tv/page/:page', async (req, res, next) => {
  let movieapi = await fetch(`https://api.themoviedb.org/3/discover/tv/?api_key=47df963032e8e73047bd6c3d0999c3c0&sort_by=popularity.desc&region=hi-IN&page=${req.params.page}`);
  movieapi = await movieapi.json();
  res.render('tv', {
    title: 'MovieBee',
    data: movieapi.results,
    page: parseInt(req.params.page) + 1
  })
})


router.get('/movie/:id', async (req, res, next) => {
  let movieapi = await fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=47df963032e8e73047bd6c3d0999c3c0`);
  movieapi = await movieapi.json();
  res.render('movie', {
    title: 'MovieBee',
    data: movieapi
  })
})


router.get('/tv/:id', async (req, res, next) => {
  let movieapi = await fetch(`https://api.themoviedb.org/3/tv/${req.params.id}?api_key=47df963032e8e73047bd6c3d0999c3c0`);
  movieapi = await movieapi.json();
  res.render('tvShow', {
    title: 'MovieBee',
    data: movieapi
  })
})

router.get('/search', async (req, res, next) => {
  let movieapi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=47df963032e8e73047bd6c3d0999c3c0&query=${req.query.query}`);
  movieapi = await movieapi.json();
  res.render('home', {
    title: 'MovieBee',
    data: movieapi.results
  })
})


module.exports = router;