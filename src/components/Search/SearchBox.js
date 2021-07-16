import axios from "axios";
import React, { useState } from "react";
import "./SearchBox.css";
import Images from "../Results/Images";
import InfiniteScroll from "react-infinite-scroll-component";
import API from "../../ApiConfig";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  var [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  const getTextInput = (e) => {
    setPhotos([]);
    setPage(1);
    setSearchText(e.target.value);
  };

  const fetchResults = (e) => {
    e.preventDefault();
    searchImages(searchText);
  };

  const searchImages = async (query = searchText, currentPage = page) => {
    setLoading(true);
    const resp = await axios.get(
      `${API.baseURL}flickr.photos.search&api_key=${API.key}&text=${query}&per_page=${perPage}&page=${currentPage}&format=json&nojsoncallback=1`
    );
    setPhotos([...photos, ...resp.data.photos.photo]);
    setLoading(false);
    setPage((page += 1));
  };
  return (
    <>
      <div className="searchBox pb-2 mb-2">
        <form onSubmit={fetchResults}>
          <input
            type="text"
            onKeyPress={getTextInput}
            placeholder="Search your images here...."
          />
        </form>
      </div>
      {searchText && photos && (
        <InfiniteScroll
          dataLength={photos.length}
          next={searchImages}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Images images={photos} loading={loading} type="searched"/>
        </InfiniteScroll>
      )}
    </>
  );
}

export default SearchBox;
