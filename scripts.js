const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBt-0cTs-vHRca-qQWNdSpriQYEeKQqv-skWhiIsF9FmXnKzvpUiruyXT&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAelZcCfMNdwf8DNv2vUhr4rymrrnafPhMU9N7PCS4scWaAoy4TB7Vtw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOS4iHdehE1TYL-0BRaZOZthoB_hs2bagvAL2pFjj1SLVbzQuFZ2O9-R9K&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3sIjeNtxruOZBY3haKlhTz83AwieJ9Q_JvIIxFbhIwdskf1gFgt6H58X&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4yfIobNruizGBscnVDSEH9T_MYirOMc2opm1LRjZ2DCcHBu3GeWsc6hI1&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VFRLkBimHU28Px1XqHZCA2cgMDB9XRvDD5P4rnHiJys7Afcl9mHjpZBP&s=10",
];
let index = 0;

const slide = document.getElementById("slide");

slide.addEventListener("mouseover", function () {
 setTimeout(()=>{
    index++;

    if (index >= images.length) {
        index = 0;
    }

    slide.src = images[index];
},1000);

});
