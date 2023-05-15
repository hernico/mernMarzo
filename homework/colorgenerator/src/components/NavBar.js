import { useState } from "react";

function Navbar(){
    const [links, setLinks] = useState([
    {
        text: "Tab 1",
        content: "Welcome Ninja tab 1",
        selected: false
    },
    {
        text: "Tab 2",
        content: "Welcome Ninja tab 2",
        selected: false
        },
    {
        text: "Tab 3",
        content: "Welcome Ninja tab 3",
        selected: true
        }

    ])  
   
    function seleccionarLink (indice_activo) {
        const newLinks = links.map((link,ind_link) =>
        {
            return{
                text: link.text,
                content: link.content,
                selected: indice_activo === ind_link
            }
        })
        setLinks(newLinks)
    }

return(
<div className="navtab">
    <div className="tabs">
        {links.map((link,indice) =>
        <button onClick={ev => seleccionarLink(indice)} key={link.text}
        className={link.selected ? "tab-item selected": "tab-item"}>{link.text}</button>
        )}
    </div>
    <div className="tab-view">
        {
            links.find(link => link.selected).content
        }
    </div>
</div>


)

}


export default Navbar;