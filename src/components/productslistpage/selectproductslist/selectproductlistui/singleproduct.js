import React from 'react';
import './singleproduct.css';

import { Link, Route } from 'react-router-dom'

export class SingleProductUnderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverOån: false
        }
    }

    render() {

        return (

            <div className='productdetailspage-single-product-container'>

         
                <div className='image-container'>
                    <img className="img" src={this.props.product.imageSrc} alt="image" />
                </div>

                <div className='content-container'>

                    <div className='name'>
                        <div>{this.props.product.title}</div>
                    </div>
                    
                    <div className='price'>
                        <div>NZD{this.props.product.variants[0].price}</div>
                    </div>
                </div>

                <Link to={`/products/productsdetails/${this.props.product.id}`}><div className={this.state.hoverOn?"displaynone":"morebtn"} >
                    <a >more ></a>
                </div></Link>
                
            </div>


        )
    }
}



