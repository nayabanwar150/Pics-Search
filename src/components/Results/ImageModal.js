import React from 'react'
import ModalImage from "react-modal-image";


const ImageModals = ({url}) => {
    console.log(url)
    return (
        <div>
            {url && <ModalImage small={url} large={url} />}
        </div>
    )
}

export default ImageModals
