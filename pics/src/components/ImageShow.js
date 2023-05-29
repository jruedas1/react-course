function ImageShow({ image }){
    return <div>
        <img src={image.urls.thumb} alt="{img.alt_description}"/>
    </div>
}

export default ImageShow;