import React, { Component } from 'react'
import {FaCocktail,  FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state ={
        services:[
            {
                icon:<FaCocktail />,
                Title:"free cocktails",
                info:"Lerem ipsum dolor sit amet consectetur adipiscing elit. Mani, corporis!"
            },
            {
                icon:<FaCocktail />,
                Title:"free cocktails",
                info:"Lerem ipsum dolor sit amet consectetur adipiscing elit. Mani, corporis!"
            },
            {
                icon:<FaShuttleVan />,
                Title:"free cocktails",
                info:"Lerem ipsum dolor sit amet consectetur adipiscing elit. Mani, corporis!"
            },
            {
                icon:<FaBeer />,
                Title:"free cocktails",
                info:"Lerem ipsum dolor sit amet consectetur adipiscing elit. Mani, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
