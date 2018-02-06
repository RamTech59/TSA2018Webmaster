import React from 'react';

export function description(route) {
  if (route === 'default'){
    return ['The Minerva E-Shelfer Would go through stores collecting data such as time that a product was bought, price, shelf position and product color and shape. With all the data collected our company’s A.I  SelfShelfed would process the data primarily creating charts which specify the most optimal location for products. The data can also be compiled to show ranking and popularity of a product in the store the Robot is working in, data which can be sold or use by the store to consider future changes suggested by SelfShelfed. Our A.I also allows the store to promote items by having SelfShelfed find where it would sell best even if it would undercut another product.', 'With the E-Shelfer knowing the layout of a store at all times customers would be able to use the robots to find location of products they are trying to find. Stores may even integrate surveys on the E-Shelfer for customers it help, this is most viable with multiple E-Selfers in one store.' ]
  } else if (route === 'benefits') {
    return [<span>Our Company A.I will be supported for minimum 10 years after initial release of the product it is running on. Updates for bug reports from stores other than your own can be applied to your robots potentially avoiding any problems that could occur. Can reduce the amount of employees need for one job saving you money.</span>,
(<ul>
  <li>Stores will have the data necessary to know what consumers like the most</li>
  <li>No need for employees to check shelves</li>
  <li>Can train employees on where to place items</li>
  <li>Can help Customers find the way to the products they want</li>
  <li>Robots can use data collected by the A.I from other stores</li>
</ul>)]
  } else if (route === 'tech') {
    return ['', '']
  } else if (route === 'liabilities') {
    return ['Our company is no liable for injuries caused by incorrect use of robot and or A.I. In the case where someone would hurt themselves by running into the E-Shelfer we are not liable. We will take responsibility for injuries or damages done by the Robot If the robot was not damaged or misused in such a way that the user got hurt. Any loses or mistakes By our A.I software that would lead to losses to the store will attended to and a fixed with a patch to the software, But our company will not take further action on the matter.', <span style={{textAlign:'left', fontSize: '12pt'}}>If you run into any problems with our robots,<br/> Please Call: 123456789 or Email: dank@memes.com</span>]
  } else if (route === 'safety') {
    return ['', '']
  } else if (route === 'costs') {
    return ['', '']
  }
}
