const thumbNailContainer = document.getElementById("thumbNailContainer");

const displayImage = document.getElementById("displayImage");

let images = [
  {
    src: "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "white tiger laying on the ground at night time",
  },

  {
    src: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "tiger standing in water",
  },

  {
    src: "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "two lionesses on green plants",
  },

  {
    src: "https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "male lion laying on a rock facing sideways",
  },

  {
    src: "https://images.unsplash.com/photo-1606667488016-b69706f96d15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "persian leapord resting on a tree",
  },

  {
    src: "https://images.unsplash.com/photo-1710407266517-b3a30ce7eabe?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a leopard looking up",
  },

  {
    src: "https://images.unsplash.com/photo-1612356701465-6ee5d1a705fd?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a lynx standing in the snow between two trees",
  },

  {
    src: "https://images.unsplash.com/photo-1604608684575-0478ddb56d48?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a lynx licking its paw",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    let thumbImage = document.createElement("img");

    thumbImage.src = image.src;
    thumbImage.alt = image.alt;

    thumbImage.setAttribute("tabindex", "0");

    thumbImage.addEventListener("click", function () {
      showBigImage(image);
    });

    thumbNailContainer.appendChild(thumbImage);
  });
}

function showBigImage(image) {
  displayImage.innerHTML = "";

  const bigImage = document.createElement("img");

  bigImage.src = image.src;
  bigImage.alt = image.alt;

  bigImage.setAttribute("tabindex", "0");

  displayImage.appendChild(bigImage);
}

createThumbnails();
