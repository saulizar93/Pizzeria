import React from 'react';
import logo from '../../img/CheesePizza.jpg';
import logo2 from '../../img/PepperoniPizza.jpg';
import Grid from '@material-ui/core/Grid';
import logo3 from '../../img/SausagePizza.jpg';
import logo4 from '../../img/HawaiianPizza.jpg';
import logo5 from '../../img/VegetarianPizza.jpg';
import logo6 from '../../img/MeatLoversPizza.jpg';
import logo7 from '../../img/BBQChickenPizza.jpg';
import logo8 from '../../img/BuffaloChickenPizza.jpg';
import {PizzaCard} from './PizzaCard'

export default function PizzaCards() {

  return (
    <div>
      <Grid container>

        <Grid item md={3}>
          <PizzaCard title="Extra Cheese Pizza" subheader="November 26, 2020" image={logo} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>

          <PizzaCard title="Pepperoni Pizza" subheader="November 26, 2020" image={logo2} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

        <Grid item md={3}>
          <PizzaCard title="Sausage Pizza" subheader="November 26, 2020" image={logo3} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/> 

          <PizzaCard title="Hawaiian Pizza" subheader="November 26, 2020" image={logo4} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

        <Grid item md={3}>
          <PizzaCard title="Vegetarian Pizza" subheader="November 26, 2020" image={logo5} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>

          <PizzaCard title="Meat Lovers Pizza" subheader="November 26, 2020" image={logo6} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

        <Grid item md={3}>
          <PizzaCard title="BBQ Chicken Pizza" subheader="November 26, 2020" image={logo7} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>

          <PizzaCard title="Buffalo Chix Pizza" subheader="November 26, 2020" image={logo8} altText="Paella dish" 
          text1="Start your pizza journey with this delicious pizza."
          text2="How we make it:"
          text3="We put our italian job into making this pizza."
          text4="We let it cook for over 3 hours in the over at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

      </Grid>
    </div>
  );
}