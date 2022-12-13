const filtersForm = document.querySelector('#filtersForm')
const applyForm = document.querySelector('#applyForm')

let filters = []
const offices = [
  {
    title: "Office #1", 
    lat: 50.436181, 
    lng: 30.511751, 
    zIndex: 1,
    benefits: [
      'starlink',
      'power',
    ]
  },
  {
    title: "Office #2",
    lat: 50.428862,
    lng: 30.513093,
    zIndex: 2,
    benefits: [
      'starlink',
    ]
  },
  {
    title: "Office #3",
    lat: 50.424937,
    lng: 30.518473,
    zIndex: 3,
    benefits: [
      'power',
    ]
  },
  {
    title: "Office #4",
    lat: 50.424128,
    lng: 30.524600,
    zIndex: 4,
    benefits: [
      'power',
    ]
  },
  {
    title: "Office #5",
    lat: 50.416487,
    lng: 30.522952,
    zIndex: 5,
    benefits: []
  },
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 50.45, lng: 30.52 },
  });

  setMarkers(map);
}

function setMarkers(map) {
  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  for(let i = 0; i < offices.length; i++) {
    const { lat, lng, title, zIndex, benefits } = offices[i];

    if(filters.every(el => benefits.indexOf(el) > -1)) {
      new google.maps.Marker({
        position: { lat, lng },
        map,
        icon: svgMarker,
        title,
        zIndex,
      })
    }
  }
}

window.initMap = initMap;

applyForm.addEventListener('click', () => {
  let checkboxes= document.querySelectorAll('input[name="filter"]:checked');

  filters = []
  checkboxes.forEach((checkbox) => {
    filters.push(checkbox.value)
  })

  initMap()
})