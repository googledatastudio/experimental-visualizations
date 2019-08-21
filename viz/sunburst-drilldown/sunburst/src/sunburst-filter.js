import * as dscc from "@google/dscc";

export default function filterDashbord(dimensionArray, filterValues) {
    let interactionData = {
        concepts: dimensionArray,
        values: filterValues
    };

    if (window.location.hostname == this.LOCAL) {
        if (dimensionArray.length > 0) {
            console.log(
                "Following information is sent to filter in production"
            );
            console.log(this.interactionId);
            console.log(interactionData);
        } else {
            console.log("Clear Data Command will be sent to DS");
        }
        location.reload();
    } else {
        const FILTER = dscc.InteractionType.FILTER;

        if (dimensionArray.length > 0) {
            dscc.sendInteraction(this.interactionId, FILTER, interactionData);
        } else {
            //clear filter
            dscc.clearInteraction(this.interactionId, FILTER);
        }
    }
}
