import React from "react";
import './MenuNavbar.css'
import filterIcon from '/assets/icons/filter.svg'

let menuItems = [
    {   
        title: "Beachfront",
        slug: "beachfront"
    },
    {
        title: "Lakefront",
        slug: "lakefront"
    },
    {
        title: "Amazing pools",
        slug: "amazing_pools"
    },
    {   
        title: "Tropical",
        slug: "tropical"
    },
    {   
        title: "Vineyards",
        slug: "vineyards"
    },
    {   
        title: "Tiny homes",
        slug: "tiny_homes"
    },
    {   
        title: "Trending",
        slug: "trending"
    },
    {   
        title: "Rooms",
        slug: "rooms"
    },
    {   
        title: "Farms",
        slug: "farms"
    },
    {
        title: "A-frames",
        slug: "a_frames"
    },
    {
        title: "Bed & Breakfasts",
        slug: "bed_breakfasts"
    },
    {
        title: "Camper vans",
        slug: "camper_vans"
    },
    {
        title: "Camping",
        slug: "camping"
    },
    {
        title: "Earth homes",
        slug: "earth_homes"
    },
    {
        title: "Historical Homes",
        slug: "historical_homes"
    },
    {
        title: "National parks",
        slug: "national_parks"
    },
    {
        title: "New",
        slug: "new"
    },
    {
        title: "Treehouses",
        slug: "treehouses"
    }
]

console.log(menuItems);
function MenuNavbar() {
    return (
        <>
            <div className="menu_navbar flex justify-center text-zinc-500">
                <div className="container flex">
                    <div className="menu_links w-full flex gap-5 my-2">
                        {
                            menuItems.map((item, index) => {
                                let link = `./assets/menu_icons/${item.slug}.jpg`
                                return (
                                    <div key={index} className="link_item items-center px-3  gap-1 h-24 flex flex-col justify-center ">
                                        <img className="w-7 opacity-70" src={link} alt={item.title} />
                                        <span className="font-bold text-sm navmenu_title">{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="filters flex items-center justify-end gap-5 w-2/5">
                        <div className="filter bg-white flex items-center gap-4 px-5 py-4 border h-fit rounded-xl border-gray-300">
                            <img className="opacity-70 h-6" src={filterIcon} alt="filterIcon" />
                            <span className="font-bold text-base">Filter</span>
                        </div>
                        <div className="dis_bef_tax_box bg-white flex items-center gap-4 px-5 py-4 border h-fit rounded-xl border-gray-300">
                            <label htmlFor="t_radio" className="font-bold text-base">Display total before taxes</label>
                            <input type="checkbox" name="t_radio" id="t_radio" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MenuNavbar;