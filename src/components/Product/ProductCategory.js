import {categoryList} from "../../models/category";

export default function ProductCategory() {
    return (
        <div className="productCategoryContainer">
            <div className="productCategoryWrapper">

                <div className="categoryListContainer">
                    {categoryList.map((value, index) => {
                        return <div className="categoryListWrapper" key={index}>
                            <div className="categoryIconWrapper">
                                <img src={value.url} alt={value.name}  />
                            </div>
                            <div className="categoryDescription">
                                {value.name}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
