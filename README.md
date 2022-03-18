# pslate Order Exporter

## Purpose of the app:

The website displays unfilfilled orders from [pslate customs](https://www.pslatecustoms.com/) by way of the [Shopify Admin API.](https://shopify.dev/api/admin)

pslate customs sells custom length power supply cables for small form factor PCs to PC building enthusiasts. What sets us apart from other custom cable stores is that the customer does not need to worry about providing cable lengths when purchasing. Measuring cable lengths is confusing for new PC builders because there is a lot of guesswork involved. It also can take a good deal of time with a small form factor case. Instead, the customer inputs their computer's components when ordering and we make cables that fit their custom build.

This has been great for business but makes things more complicated on our end. In the past, I would view every order and fill out a PDF containing cable lengths and building instructions to send to my employees. This app helps solve that issue by calculating data for each order. 

## How to use:

All of the routes in the top menu are protected. Click Sign In and Continue as a guest to view pages on the site. Under each menu, rush orders are filtered to the top. Customers can pay extra for their cables to skip the normal production queue and have their order built sooner. 

Click an order button to view its details. On the individual order page, the relevant data to hand craft the cables is displayed. This includes the building instructions, wire color / sleeving color, and power supply (PSU) model. For sleeved cables, an image is displayed which shows the customer submitted design. Once a cable is completed, it can be clicked to be greyed out.

## Example images: 

Order page:

<img src="/readme-images/screenshot1.png" width="60%">

Unsleeved orders page:

<img src="/readme-images/screenshot3.png" width="60%">

Mobile menu:

<img src="/readme-images/screenshot4.jpg" width="60%">

## Future goals:

During production, each cable order is set aside in its own plastic bin with dividers to separate each type of cable. Right now, the printed out order cards PDFs serve as a label for these boxes. Once we go digital with this website, we will need some type of label for these boxes that identifies each order.

My plan is to create a script to create QR codes that navigates to *pslate-export.pages.dev/order/:orderNumber*. These can then be printed and scanned by employees on their tablets to quickly navigate to an order and view its details. 

Other plans include:

- Ability to add product from order to database which can be retrieved on a separate page - 'View Missing Cables'. This would be a list of cables that need to be made. 
- Add search functionality to find an order by order number (including older, fulfilled orders).

## Technology stack:

React, Redux, JWT, Node.js, Express, MongoDB, mongoose, Axios, bcryptjs, CSS, Tailwind
