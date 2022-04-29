import React from 'react';

function WhatIsApi() {
  return (
    <div>
      <div><a href="/posts/html">&lt; Posts</a></div>
      <h2>What is API?</h2>

      <div><span>03/30/2022</span></div>

      <div>
        <p>
          API, Application Programming Interface, at a high level, defines how you
          would interact with a system.
        </p>
        <p>
          Picture a vending machine, where you are provided slots to insert money,
          a console to select items you want to purchase, a compartment at the
          bottom that the item you purchase will be sent to, and a tray/slot where
          you will receive your refund or changes.
        </p>
        <p>
          To align the vending machine example with API, the vending machine is
          the system you are interacting with. The money inserting slots and the
          console that you use to select items to purchase collectively is an API
          that the vending machine exposes to you to purchase items from it. This
          'API' defines what is required of you to interact with the vending
          machine in order to get the item you want to purchase, which is known as
          the response/payload/output of the API.
        </p>
        <p>TL;DR: request -{'>'} API -{'>'} response</p>
      </div>
    </div>
  );
}
export default WhatIsApi;