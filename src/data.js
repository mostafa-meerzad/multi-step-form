import { advanced, arcade, pro } from "./assets/icons";

const formStepsData = [
  { step: 1, desc: "Your info" },
  {
    step: 2,
    desc: "Select plan",
  },
  {
    step: 3,
    desc: "Add-ons",
  },
  {
    step: 4,
    desc: "Summary",
  },
];

const stepOneData = [
  {
    label: "Name",
    placeholder: "e.g. Stephen King",
    type:"text",
    name:"name"
  },
  {
    label: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
    type:"email",
    name:"email",
  },
  {
    label: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
    type:"text",
    name:"phone"
  }
]

const stepTwoData = [
  {
    img:arcade,
    title: "Arcade",
    price:{
      monthly:"$9/mo",
      yearly:"$90/yr",
    }, 
    freeMonths: "2 months free"
  },
  {
    img:advanced,
    title: "Advanced",
    price:{
      monthly:"$12/mo",
      yearly:"$120/yr",
    }, 
    freeMonths: "2 months free"
  },
  {
    img:pro,
    title: "Pro",
    price:{
      monthly:"$15/mo",
      yearly:"$150/yr",
    }, 
    freeMonths: "2 months free"
  },
]

const stepThreeData = [

  {
    title:"Online service",
    desc: "Access to multiplayer games",
    price:{
      monthly: "+$1/mo",
      yearly:"+$10/yr",
    }
  },
  {
    title:"Larger storage",
    desc: "Extra 1TB of cloud save",
    price:{
      monthly: "+$2/mo",
      yearly:"+$20/yr",
    }
  },
  {
    title:"Customizable Profile",
    desc: "Custom theme on your profile",
    price:{
      monthly: "+$2/mo",
      yearly:"+$20/yr",
    }
  },

]

export {formStepsData, stepOneData, stepTwoData, stepThreeData}