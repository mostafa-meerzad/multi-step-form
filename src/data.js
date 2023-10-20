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
      monthly:9,
      yearly:90,
    }, 
    freeMonths: "2 months free"
  },
  {
    img:advanced,
    title: "Advanced",
    price:{
      monthly:12,
      yearly:120,
    }, 
    freeMonths: "2 months free"
  },
  {
    img:pro,
    title: "Pro",
    price:{
      monthly:15,
      yearly:150,
    }, 
    freeMonths: "2 months free"
  },
]

const stepThreeData = [

  {
    title:"Online service",
    desc: "Access to multiplayer games",
    price:{
      monthly: 1,
      yearly:10,
    }
  },
  {
    title:"Larger storage",
    desc: "Extra 1TB of cloud save",
    price:{
      monthly: 2,
      yearly:20,
    }
  },
  {
    title:"Customizable Profile",
    desc: "Custom theme on your profile",
    price:{
      monthly: 2,
      yearly:20,
    }
  },

]

export {formStepsData, stepOneData, stepTwoData, stepThreeData}