let draw_items_fillter = [{
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/1.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Design"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/2.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Mation"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/3.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Print"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/4.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Video"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/5.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Video"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/6.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Print"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/7.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Mation"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/8.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Design"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/9.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Design"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/10.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Mation"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/11.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Print"
    },
    {
        src: "https://preview-unifox.netlify.app/assets/images/portfolio/12.jpg",
        header_hover: "Project Title Here",
        prag_hover: "Project Title Here",
        fillter: "Video"
    }
]

// ============ draw items portifolios

function draw_item(x) {
    let draw_map_item = (x).map((item) => {
        return `
        <div class="col-lg-3 col-12 mt-4">
        <div class="show-image-hover">
            <img src="${item.src}" class="" alt="" data-id="Design" />
            <div class="image-hover d-flex">
                <div class="image-hover-h3-h5">
                    <h3>${item.header_hover}</h3>
                    <h5>${item.prag_hover}</h5>
                </div>
                <div class="image-hover-icon">
                    <i class="fas fa-camera"></i>
                    <i class="fas fa-camera"></i>
                    <i class="fas fa-camera"></i>
                </div>
            </div>
        </div>
    </div>
        `
    })

    let content_draw = document.querySelector(".portoflios-item")
    draw_map_item = draw_map_item.join("")
    content_draw.innerHTML = draw_map_item

}

draw_item(draw_items_fillter)

// function click btns fillters
function fillter() {
    let buttons_fillter = document.querySelectorAll(".buttons-fillter button")
    buttons_fillter.forEach((btn) => {
        btn.addEventListener("click", () => {
            // clear $$ add class active
            buttons_fillter.forEach(item => {
                item.classList.remove("active")
                btn.classList.add("active")
            })

            //  fillter btn
            let name_data_id = btn.getAttribute("data-id")
            if (name_data_id == "All") {
                draw_item(draw_items_fillter)
            } else {
                let btn_fillter = draw_items_fillter.filter((new_item) => new_item.fillter == name_data_id)
                draw_item(btn_fillter)
            }
        })
    });
}
fillter()