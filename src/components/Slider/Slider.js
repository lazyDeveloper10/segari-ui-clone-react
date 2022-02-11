import {sliderList} from "../../models/slider";

export default function Slider() {
    return (
        <div className="slider">
            <figure>
                {sliderList.map((value, index) => {
                    return <div className="slide" key={index}>
                        <img src={value.url} alt={value.name}  />
                    </div>
                })}
            </figure>
        </div>
    )
}
