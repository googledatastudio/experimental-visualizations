import * as msg from "../js/messages";

const Helper = {
    getMaxDimensions(id) {
        const val = {};
        const container = document.getElementById(id);
        val.w = container.offsetWidth;
        val.h = container.offsetHeight;

        val.w >= val.h ? (val.max = val.h) : (val.max = val.w);
        val.w >= val.h
            ? (val.direction = "horizontal")
            : (val.direction = "vertical");

        return val;
    },

    renderErrorMessage(node, errTitle, errMsg) {
        const content = node
            .append("div")
            .attr("id", "error")
            .append("div")
            .attr("class", "row");

        // ** Append logo as svg
        const logoW = 200; // original size as exported
        const logoH = 95;
        const scale = 0.2;

        content
            .append("svg")
            .attr("width", `${logoW*scale}`)
            .attr("height", `${logoH*scale}`)
            .attr("viewbox", `0 0 ${logoW*scale} ${logoH*scale}`)
            .attr("fill", "none")
            .append("path")
            .attr('transform', `scale(${scale})`)
            .attr("d", msg.logoPath)
            .attr("fill", "#ABAF2C");            

        content
            .append("h2")
            .attr("id", "title")
            .text(errTitle);

        content
            .append("p")
            .attr("id", "message")
            .text(errMsg);

        console.log(`### ${errTitle} : ${errMsg} ###`);
    },

    getScreenCoords(x, y, ctm) {
        const xn = ctm.e + x * ctm.a + y * ctm.c;
        const yn = ctm.f + x * ctm.b + y * ctm.d;
        return { x: xn, y: yn };
    },

    getScreenCoordsCanvas(x, y, ctm) {
        const xn = ctm.x + x * ctm.s;
        const yn = ctm.y + y * ctm.s;
        return { x: xn, y: yn };
    },

    async loadImage(imageUrl) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.addEventListener("load", () => resolve(img));
            img.addEventListener("error", err => reject(err));
            img.src = imageUrl;
        });
    }
};

export default Helper;
