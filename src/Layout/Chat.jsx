import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import whatsapp from "../assets/images/whatsapp.png"

const Chat = () => {
    const [appear, setAppear] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 200 ? setAppear(true) : setAppear(false)
        })
    })
  return (
    <div>
        {
            appear  && <div className='bottom-6 right-6 fixed z-50'>
              <Tooltip color=" green" title="Chat with us">
                  <a href="https://wa.me/277984606" target="blank">
                    <img
                      className="p-1 rounded-full h-14 w-14 object-contain bg-slate-200 lg:hover:scale-110"
                      src={whatsapp}
                      alt="chat"
                    />
                  </a>
                </Tooltip>
            </div>
        }
    </div>
  )
}

export default Chat