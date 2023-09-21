const container = document.getElementById("container");
container.className="ms-5 mt-4"



const h2 = document.createElement("h2");
h2.innerText = "OUR TEAM";
h2.className="mt-3 fs-3"
container.append(h2);

const p = document.createElement("p")
p.innerHTML="<b>The text referenced above is called Lorem Ipsum, and it is a dummy...</b>"
p.className= "text-info ms-3 mt-4 fs-3 "
container.append(p);



const cardsection = document.createElement('div');
cardsection.className="d-flex flex-wrap justify-content-between gap-4 me-4 "
// cards section1
const card1 = document.createElement('div')
card1.className = "card";
card1.style.width = "23rem";
card1.style.height = "23rem";
card1.style.border = "2px solid black";
cardsection.append(card1)


const img1=document.createElement('img')
img1.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img1.className="w-75 h-50 mt-2 ms-5"
card1.append(img1);

// card body section
const cardBody1 = document.createElement("div");
cardBody1.class = "card-body";
card1.append(cardBody1)

const card1h3 = document.createElement('h3')
card1h3.className="card-title text-center"
card1h3.innerText="Lord Krishna"
cardBody1.append(card1h3);

const card1h5=document.createElement('h5')
card1h5.className="card-text"
card1h5.innerText="Krishna is a major deity in Hinduism."
card1h5.className="ms-3 p-1"
cardBody1.append(card1h5);

const card1btn = document.createElement('button')
card1btn.innerText="View Details"
card1btn.className="btn btn-primary mb-3 fs-4"
card1btn.style.marginLeft="7rem"
cardBody1.append(card1btn)



// card section2
const card2 = document.createElement('div')
card2.className = "card";
card2.style.width = "23rem";
card2.style.height = "23rem";
card2.style.border = "2px solid black";
cardsection.append(card2)


const img2=document.createElement('img')
img2.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img2.className="w-75 h-50 mt-2 ms-5"
card2.append(img2);

// card body section
const cardBody2 = document.createElement("div");
cardBody2.class = "card-body";
card2.append(cardBody2)

const card2h3 = document.createElement('h3')
card2h3.className="card-title text-center"
card2h3.innerText="Lord Krishna"
cardBody2.append(card2h3);

const card2h5=document.createElement('h5')
card2h5.className="card-text"
card2h5.innerText="Krishna is a major deity in Hinduism."
card2h5.className="ms-3 p-1"
cardBody2.append(card2h5);

const card2btn = document.createElement('button')
card2btn.innerText="View Details"
card2btn.className="btn btn-primary mb-3 fs-4"
card2btn.style.marginLeft="7rem"
cardBody2.append(card2btn)


// card section3
const card3 = document.createElement('div')
card3.className = "card";
card3.style.width = "23rem";
card3.style.height = "23rem";
card3.style.border = "2px solid black";
cardsection.append(card3)


const img3=document.createElement('img')
img3.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img3.className="w-75 h-50 mt-2 ms-5"
card3.append(img3);

// card body section
const cardBody3 = document.createElement("div");
cardBody3.class = "card-body";
card3.append(cardBody3)

const card3h3 = document.createElement('h3')
card3h3.className="card-title text-center"
card3h3.innerText="Lord Krishna"
cardBody3.append(card3h3);

const card3h5=document.createElement('h5')
card3h5.className="card-text"
card3h5.innerText="Krishna is a major deity in Hinduism."
card3h5.className="ms-3 p-1"
cardBody3.append(card3h5);

const card3btn = document.createElement('button')
card3btn.innerText="View Details"
card3btn.className="btn btn-primary mb-3 fs-4"
card3btn.style.marginLeft="7rem"
cardBody3.append(card3btn)

// card section4
const card4 = document.createElement('div')
card4.className = "card";
card4.style.width = "23rem";
card4.style.height = "23rem";
card4.style.border = "2px solid black";
cardsection.append(card4)


const img4=document.createElement('img')
img4.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img4.className="w-75 h-50 mt-2 ms-5"
card4.append(img4);

// card body section
const cardBody4 = document.createElement("div");
cardBody4.class = "card-body";
card4.append(cardBody4)

const card4h3 = document.createElement('h3')
card4h3.className="card-title text-center"
card4h3.innerText="Lord Krishna"
cardBody4.append(card4h3);

const card4h5=document.createElement('h5')
card4h5.className="card-text"
card4h5.innerText="Krishna is a major deity in Hinduism."
card4h5.className="ms-3 p-1"
cardBody4.append(card4h5);

const card4btn = document.createElement('button')
card4btn.innerText="View Details"
card4btn.className="btn btn-primary mb-3 fs-4"
card4btn.style.marginLeft="7rem"
cardBody4.append(card4btn)


// card section5
const card5 = document.createElement('div')
card5.className = "card";
card5.style.width = "23rem";
card5.style.height = "23rem";
card5.style.border = "2px solid black";
cardsection.append(card5)


const img5=document.createElement('img')
img5.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img5.className="w-75 h-50 mt-2 ms-5"
card5.append(img5);

// card body section
const cardBody5 = document.createElement("div");
cardBody5.class = "card-body";
card5.append(cardBody5)

const card5h3 = document.createElement('h3')
card5h3.className="card-title text-center"
card5h3.innerText="Lord Krishna"
cardBody5.append(card5h3);

const card5h5=document.createElement('h5')
card5h5.className="card-text"
card5h5.innerText="Krishna is a major deity in Hinduism."
card5h5.className="ms-3 p-1"
cardBody5.append(card5h5);

const card5btn = document.createElement('button')
card5btn.innerText="View Details"
card5btn.className="btn btn-primary mb-3 fs-4"
card5btn.style.marginLeft="7rem"
cardBody5.append(card5btn)


// card section6
const card6 = document.createElement('div')
card6.className = "card";
card6.style.width = "23rem";
card6.style.height = "23rem";
card6.style.border = "2px solid black";
cardsection.append(card6)


const img6=document.createElement('img')
img6.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img6.className="w-75 h-50 mt-2 ms-5"
card6.append(img6);

// card body section
const cardBody6 = document.createElement("div");
cardBody6.class = "card-body";
card6.append(cardBody6)

const card6h3 = document.createElement('h3')
card6h3.className="card-title text-center"
card6h3.innerText="Lord Krishna"
cardBody6.append(card6h3);

const card6h5=document.createElement('h5')
card6h5.className="card-text"
card6h5.innerText="Krishna is a major deity in Hinduism."
card6h5.className="ms-3 p-1"
cardBody6.append(card6h5);

const card6btn = document.createElement('button')
card6btn.innerText="View Details"
card6btn.className="btn btn-primary mb-3 fs-4"
card6btn.style.marginLeft="7rem"
cardBody6.append(card6btn)


// card section7
const card7 = document.createElement('div')
card7.className = "card";
card7.style.width = "23rem";
card7.style.height = "23rem";
card7.style.border = "2px solid black";
cardsection.append(card7)


const img7=document.createElement('img')
img7.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img7.className="w-75 h-50 mt-2 ms-5"
card7.append(img7);

// card body section
const cardBody7 = document.createElement("div");
cardBody7.class = "card-body";
card7.append(cardBody7)

const card7h3 = document.createElement('h3')
card7h3.className="card-title text-center"
card7h3.innerText="Lord Krishna"
cardBody7.append(card7h3);

const card7h5=document.createElement('h5')
card7h5.className="card-text"
card7h5.innerText="Krishna is a major deity in Hinduism."
card7h5.className="ms-3 p-1"
cardBody7.append(card7h5);

const card7btn = document.createElement('button')
card7btn.innerText="View Details"
card7btn.className="btn btn-primary mb-3 fs-4"
card7btn.style.marginLeft="7rem"
cardBody7.append(card7btn)


// card section8
const card8 = document.createElement('div')
card8.className = "card";
card8.style.width = "23rem";
card8.style.height = "23rem";
card8.style.border = "2px solid black";
cardsection.append(card8)


const img8=document.createElement('img')
img8.src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
img8.className="w-75 h-50 mt-2 ms-5"
card8.append(img8);

// card body section
const cardBody8 = document.createElement("div");
cardBody8.class = "card-body";
card8.append(cardBody8)

const card8h3 = document.createElement('h3')
card8h3.className="card-title text-center"
card8h3.innerText="Lord Krishna"
cardBody8.append(card8h3);

const card8h5=document.createElement('h5')
card8h5.className="card-text"
card8h5.innerText="Krishna is a major deity in Hinduism."
card8h5.className="ms-3 p-1"
cardBody8.append(card8h5);

const card8btn = document.createElement('button')
card8btn.innerText="View Details"
card8btn.className="btn btn-primary mb-3 fs-4"
card8btn.style.marginLeft="7rem"
cardBody8.append(card8btn)


container.append(cardsection);


