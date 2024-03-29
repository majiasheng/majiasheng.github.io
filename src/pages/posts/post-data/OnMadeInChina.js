/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const title = 'On Made in China';
const date = '04/22/2022';

function OnMadeInChina() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <div>
        <p>
          "Made in China", to most, this associates with cheap or poor quality products. It's not entirely wrong, most Chinese exported goods are low in price, and that's why they are so widely seen. Lower price typically associates with cheaper quality, that's just how things work in general. If another country, say a developed country, has even cheaper goods (assuming this general phenomenon of cheap good accompanies with lower quality), then a lot of other countries would import from that country. Consequently, over time, "Made in Country X" would be associated with cheap. Most of the world has yet to appreciate some of the quality goods Chinese have to offer. If you are into bonsai, then you probably heard of Yixing, the world capital of pottery. Some of the works take years to master, and the quality is without question sitting at the top if you compare that with the day to day Chinese goods you see.
        </p>
      </div>
    </div>
  );
}
export default {
  title,
  date,
  content: OnMadeInChina,
  pathName: 'on-made-in-china',
};
