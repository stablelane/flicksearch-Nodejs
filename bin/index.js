#!/usr/bin/env node

const moviename = process.argv[2]
import cliSelect from "cli-select"
import open from "open"

if (moviename) {
  let arrmovie = []
  fetch(`http://www.omdbapi.com/?s=${moviename}&apikey=1170f02c`)
    .then(res => res.json())
    .then(data => {
      let arr = {
        values: data.Search.map(item => {
          let string = "Name: " + item.Title + " Year: " + item.Year + " Type: " + item.Type
          return string
        })
      }
      cliSelect(arr)
        .then((selected) => openMovie(data.Search[selected.id].imdbID))
    })

}

function openMovie(id) {
  open(`https://multiembed.mov/?video_id=${id}`)
}



