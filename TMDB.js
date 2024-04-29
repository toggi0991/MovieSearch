const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer b263237d22ac2df844db230b803f7d42'
  }
};




const logic = {
  ListAddress: "https://api.themoviedb.org/3/movie/top_rated",
  ImgAddress: "https://image.tmdb.org/t/p/w500",
  apikey: "?api_key=b263237d22ac2df844db230b803f7d42",
  language: "&language=ko-KR"
}



fetch(logic.ListAddress + logic.apikey + logic.language + "&page=" + "1").then((res) => {
  return res.json();
})
  .then((json) => {
    document.getElementsByClassName("main")[0].insertAdjacentElement("beforeend",
      `
      <div>
         
      </div>
      `
    );
    document.getElementById("img0").src = logic.ImgAddress + json.results[0].poster_path;
  })


