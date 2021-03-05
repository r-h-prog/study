const container = document.getElementById('container');

const num = 8;
const margin = 2;
const boxScale = 1;
for(let x = 0; x < num; y++){
    console.log("x");
    for(let y = 0; y < num; y++){
        console.log('y');
        for(let z = 0; z < num; z++){
            const box = document.createElement('a-box');
            box.setAttribute(
                "position",
                `${x*margin} ${y*margin} ${z*margin}`
            );
            box.setAttribute("scale", `${boxScale} ${boxScale} ${boxScale}`);
            box.setAttribute("color", "#b1cde0");
            box.setAttribute("material", "blending: additive");
            box.setAttribute(
              "animation",
              "property: scale; from: 0.3 0.3 0.3 ; to: 0.8 0.8 0.8; dur: 3000; loop: true; dir: alternate; easing: easeInOutQuad"
            );
            box.setAttribute(
              "animation__2",
              "property: rotation; from: 0 0 0 ; to: 360 0 360; dur: 7000; loop: true; dir: alternate; easing: easeInOutQuad"
            );
            container.appendChild(box);
        }
    }
}

container.setAttribute(
    "position",
    `${-num / 2 - margin / 2 - boxScale / 2}
    ${-num / 2 - margin / 2 - boxScale / 2}
    ${-num / 2 - margin / 2 - boxScale / 2}`
  );