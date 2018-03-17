import React from 'react';
import './mainlists.css';


import { ShopByCategory } from './shopbycategory/shopbycategory';
import { SingleProductListUi } from './singleproductlistui/singleproductlistui';
import { NavLink, Route } from 'react-router-dom';
import { Loading } from '../../animation/loading';
import { SingleEventUi } from '../../eventspage/eventslist/singleeventui'

export class MainLists extends React.Component {
  render() {
    const initialArray=this.props.productsList;

    const popularList=[initialArray[2],initialArray[3],initialArray[4],initialArray[7],initialArray[12],initialArray[13] ];
    
    if (popularList[0]==undefined||this.props.collectionList[0]==undefined){
      return <Loading />
    }

    return (
      <main className="homepage-main-container">

        

        <div className="title1">
          <p>Shop by category</p>
        </div>

        <div className="shopbycategory">

          {this.props.collectionList.map((element) => <ShopByCategory product={element} key={element.id} />)}

        </div>

        <div className="title1">
          <p>Most popular products</p>
        </div>

         <div className="popular-product-list">
          {popularList.map(element => <SingleProductListUi product={element} key={element.id} />)}

        </div>

        <div className="see-more-1">
          <NavLink className="active" to="products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=">See more ></NavLink>
        </div>
        

        <div className="title1">
          <p>Fresh on our events</p>
        </div>

   

        <div className="events-list">
          {this.props.events.slice(0,3).map(element => <SingleEventUi event={element} key={element.title} />)}
        </div>

      </main>

    )
  }
}


