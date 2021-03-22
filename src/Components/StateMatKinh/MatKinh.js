import React, { Component } from 'react'

export default class MatKinh extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }

    ]

    state = {
        productDetail: {
            id: 1,
            price: 30,
            name: 'GUCCI G8850U',
            url: './img/glassesImage/v1.png',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }

    renderProduct = () => {
        return this.arrProduct.map((item, index) => {
            return <div className="col-4 mt-5" key={index}>
                <img src={item.url} style={{ width: '100%', cursor: 'pointer' }} onClick={() => {
                    this.thayDoiKinh(item)
                }} />
            </div>
        })
    }

    thayDoiKinh = (change) => {
        console.log(change);
        this.setState({
            productDetail: change
        })
    }

    render() {

        let { id, price, name, url, desc } = this.state.productDetail;

        return (
            <div>
                <img src="./img/glassesImage/background.jpg" className="w-100 position-absolute" />
                <h1 className="position-relative p-4 text-center text-white" style={{ backgroundColor: '#0000008a' }}>TRY GLASSES APP ONLINE</h1>
                <div className="container position-relative">
                    <div className="container py-3">
                        <div className="row justify-content-between">
                            <div className="col-5 p-0">
                                <img className="position-absolute" src="./img/glassesImage/model.jpg" />
                                <div className="position-relative" style={{ top: '25%', left: '27%' }}>
                                    <img src={url} style={{ width: '238px', height: '85px', opacity: '0.9' }} />
                                </div>
                                <div className="position-relative bg-warning" style={{ top: '61.5%', padding: '10px' }}>
                                    <h1 className="text-primary">{name}</h1>
                                    <p className="text-secondary">{desc}</p>
                                </div>
                            </div>
                            <div className="col-5 p-0">
                                <img src="./img/glassesImage/model.jpg" />
                            </div>
                        </div>
                        <div class="container col-8">
                            <div className="row" id="vglassesList">
                                {this.renderProduct()};
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
