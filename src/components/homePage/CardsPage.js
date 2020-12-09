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
          text3="We put all the cheese in the fridge onto it"
          text4="We let it cook for over 3 hours in the oven at low temperatures. No rushing."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>

          <PizzaCard title="Pepperoni Pizza" subheader="November 26, 2020" image={logo2} altText="Paella dish" 
          text1="Choose our delicious pepperoni pizza, we don't hold back!"
          text2="How we make it:"
          text3="Three pounds of pepperoni per slice. You will not find a better pepperoni pizza"
          text4="It is placed in the over at low temperatures for 2 hours"
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

        <Grid item md={3}>
          <PizzaCard title="Sausage Pizza" subheader="November 26, 2020" image={logo3} altText="Paella dish" 
          text1="Start your sausage fest with this option."
          text2="How we make it:"
          text3="We will slice up thick, long sausages and place them throughout the slice."
          text4="We place it in the oven at high temperatures for a quick finish of 25 minutes."
          text5="Set aside off of the heat to let rest for only 5 minutes, and then serve."/> 

          <PizzaCard title="Hawaiian Pizza" subheader="November 26, 2020" image={logo4} altText="Paella dish" 
          text1="If you don't care what people think about you, this is your option."
          text2="How we make it:"
          text3="We put pineapple and the whola whola all over it."
          text4="We let it cook about 2 hours in the oven at low temperatures to care for the pineapple."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

        <Grid item md={3}>
          <PizzaCard title="Vegetarian Pizza" subheader="November 26, 2020" image={logo5} altText="Paella dish" 
          text1="If you drive a Prius, this is your pizza. Pick to high moral ground!"
          text2="How we make it:"
          text3="We put all the healhty and environmentally aware ingredients on this slice."
          text4="We cook it in the microwave to avoid releasing damaging gases to the environment."
          text5="We set the microwave to 2 minutes, and do not stop staring at the rotating pizza for a second."/>

          <PizzaCard title="Meat Lovers Pizza" subheader="November 26, 2020" image={logo6} altText="Paella dish" 
          text1="Got a full size truck with full size American flags hanging in the back?"
          text2="How we make it:"
          text3="We put all the meat and grind onto every single slice."
          text4="We cook the meat separately from the pizza, medium well, and then place them on the slice."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>
        </Grid>

        <Grid item md={3}>
          <PizzaCard title="BBQ Chicken Pizza" subheader="November 26, 2020" image={logo7} altText="Paella dish" 
          text1="You can never go wrong with BBQ. It's the American spirit!"
          text2="How we make it:"
          text3="We load a whole bottle of BBQ onto every slice!"
          text4="We let it cook for over 2 hours in the oven at low temperatures."
          text5="Set aside off of the heat to let rest for 10 minutes, and then serve."/>

          <PizzaCard title="Buffalo Chix Pizza" subheader="November 26, 2020" image={logo8} altText="Paella dish" 
          text1="Here is your spicy option! Can you handle it?"
          text2="How we make it:"
          text3="This option will make your nose run"
          text4="We let it cook for about an hours in the oven at low temperatures."
          text5="Set aside off of the heat to let rest for 5 minutes, and then serve."/>
        </Grid>

      </Grid>
    </div>
  );
}