const products = [
  {
    name: "BMW C1100",
    price: 759999999,
    discription: "Sport Car",
    image:
      "https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_279,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/d03a6dbb79acf72231f0a090e9f3b930/2023_bmw_mena_x6_jump_cycle_mobile.jpg",
  },
  {
    name: "BMW GS2100",
    price: 8099999999,
    discription: "Sport Bike",
    image:
      "https://www.motoworkschicago.com/wp-content/uploads/2023/06/2022-BMW-K-1600-B-removebg-preview.png",
  },
  {
    name: "BMW GS1300",
    price: 50000000000,
    discription: "Tourist Bike",
    image:
      "https://www.touratech.com/media/mageplaza/blog/post/b/m/bmw-r-1300-gs-mockup_website_1.jpg",
  },
  {
    name: "BMW IX50",
    price: 2999999999,
    discription: "Electric Car",
    image:
      "https://bmwixpreorder.richmondday.com/Content/images/models/Xdrive40.png",
  },
  {
    name: "BMW G310",
    price: 7999999,
    discription: "Sport Bike",
    image:
      "https://i.pinimg.com/1200x/3c/36/50/3c365027255ce02daa6b2b80c013a40d.jpg",
  },
  {
    name: "BMW GS2022",
    price: 6809999999,
    discription: "Sport Bike",
    image:
      "https://www.topgear.com/sites/default/files/2021/11/1.%20Vehicle%20render%20-%20White%20background%20%28AOE%20Mobility%20AS%29.jpg",
  },
  {
    name: "BMW i3",
    price: 7099999999,
    discription: "Electric Car",
    image:
      "https://cars.usnews.com/static/images/Auto/izmo/Colors/bmw_17i3dekarangeext5ha1fa_cappariswhitewbmwifrozenblueaccent.jpg",
  },
  {
    name: "BMW GS1100",
    price: 7509899999,
    discription: "Sport Bike",
    image:
      "https://www.motoworkschicago.com/wp-content/uploads/2023/06/studio-1-1-removebg-preview.png",
  },
  {
    name: "BMW GS3300",
    price: 1268999,
    discription: "Sport Bike",
    image:
      "https://pmmdata.dev.pixelmotiondemo.com/wp-content/uploads/2022/11/2000000008-removebg-preview.png",
  },
  {
    name: "BMW GS04",
    price: 70999999,
    discription: "Electric Bike",
    image:
      "https://www.webbikeworld.com/wp-content/uploads/2023/03/BMW_CE04_electric_scooter_review_02.jpg",
  },
  {
    name: "BMW GS20",
    price: 3499999,
    discription: "Sport Bike",
    image:
      "https://www.nicepng.com/png/detail/625-6253509_white-bmw-k1200s-sport-motorcycle-bike-png-image.png",
  },
  {
    name: "BMW GS3000",
    price: 12399999,
    discription: "Sport bike",
    image:
      "https://www.kindpng.com/picc/m/30-309045_bmw-k1200r-sport-motorcycle-bike-png-image-tvs.png",
  },
];

const productGrid = document.getElementById("productGrid");

function displayProducts(productList) {
  productGrid.innerHTML = ""; // Clear previous products
  productList.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p class="text-black">Discription : ${product.discription}</p>
        <button class="add-to-cart">Add To Cart</button>
        <button class="buy-now">Buy Now</button>
      `;

    productGrid.appendChild(productCard);
  });
}

displayProducts(products);
