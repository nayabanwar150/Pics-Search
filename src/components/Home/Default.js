import React, { useEffect, useState } from "react";
import Images from "../Results/Images";
import API from "../../ApiConfig";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Loaders/Loader'

const Default = () => {
  const [photos, setPhotos] = useState([]);
  var [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    setPage((page += 1));
    try {
      const resp = await axios.get(
        `${API.baseURL}flickr.photos.getRecent&api_key=${API.key}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1&safe_search=2`
      );
      setPhotos([...photos, ...resp.data.photos.photo]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  console.log("default loaded");
  return (
    <>
      <div>
        {photos.length > 0 && (
          <InfiniteScroll
            dataLength={photos.length}
            next={fetchImages}
            hasMore={true}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Images images={photos} />
          </InfiniteScroll>
        )}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Default;
