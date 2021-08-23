<template>
  
    <div class="searchBox">
      <input type="text" v-model="searchTerms" />
      <button @click="fetchGif">Search</button>
    </div>
    <div class="gif-display">
      <img v-for="gifUrl in gifUrls" :src="gifUrl" :key="gifUrl">
    </div>
  
</template>


<script>
export default {
  data() {
    return {
      searchTerms: "",
      gifs: [],
      gifUrls: [],
      gifIds: [],
      display: false
    };
  },
  methods: {
    fetchGif() {
      let searchUrl = "https://api.giphy.com/v1/gifs/search?";
      let APIKEY = "jh6Z3Lh1IyQw4b7DG4N0NRVq5j71DmTG";
      let searchLimit = 50;
      let url = `${searchUrl}&api_key=${APIKEY}&q=${this.searchTerms}`;
      fetch(url)
        .then((res) => {
          res.json().then((json) => {
            console.log(json)
            this.constructGifUrl(json)
          });
        })
        .catch((err) => console.log(err.messages));
    },
  constructGifUrl(json) {
    this.gifUrls = []
    for(let i=0; i < json.data.length; i++) {
      this.gifUrl = `https://media.giphy.com/media/${json.data[i].id}/giphy.gif`
      this.gifUrls.push(this.gifUrl)
    }

  }
  },
};
</script>

<style>
button {
  padding: 10px 20px;
  border-radius: 10px;
}
input {
  padding: 10px 6px;
  width: 1000px;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.searchBox {
  display: flex;
  max-width: 1000px;
  position: fixed;
  top: 0
}
.gif-display {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 1000px;
}
</style>