import React, { useEffect } from "react";
import { Navbar } from "~/header/navbar";
import { Footer } from "~/footer/footer";
import $ from "jquery";
import "jqvmap/dist/jqvmap.min.css";

export default function WorldMap() {
    useEffect(() => {
        // Expose jQuery globally
        (window as any).jQuery = $;
        (window as any).$ = $;

        // Dynamically import jqvmap only in the browser
        import("jqvmap/dist/jquery.vmap.min.js").then(() => {
            import("jqvmap/dist/maps/jquery.vmap.world.js").then(() => {
                ($("#vmap") as any).vectorMap({
                    map: "world_en",
                    backgroundColor: "#a5bfdd",
                    borderColor: "#818181",
                    borderOpacity: 0.25,
                    borderWidth: 1,
                    color: "#f4f3f0",
                    enableZoom: true,
                    hoverColor: "#c9dfaf",
                    normalizeFunction: "linear",
                    showTooltip: true,
                });
            });
        });
    }, []);

    return (
        <>
            <Navbar />
            <div id="vmap" style={{ width: "800px", height: "500px" }} />
            <Footer />
        </>
    );
}
