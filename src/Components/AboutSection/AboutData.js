import Restaurant from "../../assets/images/Restaurant.jpg";
import about1 from "../../assets/images/about1.jpg";
import Playground from "../../assets/images/meeting1.jpg";
import rate from"../../assets/images/debt.png"
import checkout from"../../assets/images/checkout.gif"
import housekeeping from"../../assets/images/housekeeping.gif"
import sleep from"../../assets/images/sleep.gif"

export const  AboutData = [
    {
      title1: "We provide best places for Rest and business meetings",
      title2: "Restaurant & Bar",
      title3: "Meetings & PlayGround",
      Cover1: about1,
      Cover2: Restaurant,
      Cover3: Playground,
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reprehenderit saepe harum delectus nihil, ducimus temporibusquidem dolor animi incidunt tempore eligendi soluta ipsa expedita Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit saepe harum delectus nihil, ducimus temporibus",
    },
  ]

  
// ===== Content Data ======== 

export const ContentData = [
  {
    id: 1,
    title: "Flexible Rates",
    icon: rate,
    desc: 'When plans change, we offer easy cancellation options'
  },
  {
    id: 2,
    title: "Pay at the Hotel",
    icon: checkout,
    desc: 'Lock in the price now with no upront credit card charges for most rates'
  },
  {
    id: 3,
    title: "Earn Free Night",
    icon: sleep,
    desc: 'Get a free starting at just 7,500 points with our Rewards'
  },
  {
    id: 4,
    title: "Enhanced cleaning",
    icon: housekeeping,
    desc: 'Enjoy peace of mind elevated health and safety measures'
  },
]