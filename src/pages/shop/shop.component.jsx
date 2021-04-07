import React from "react"
import {Route} from "react-router-dom"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"

const ShopPage = ({match}) => (
    //removed className shop-page of the div de abajo..no cumplia funcion aparentemete
    <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)

export default ShopPage