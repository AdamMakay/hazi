

function TablaLetrehozasa()
{
    let container = document.getElementById("container");
    let table = document.createElement("table");
    let sorok = Number(document.getElementById("columns").value);
    let oszlopok = Number(document.getElementById("rows").value);
    let oszlop;
    for(let i = 0;i<oszlopok;i++)
    {
        oszlop = document.createElement("tr")
        let sor;
        for(let i = 0; i < sorok;i++)
        {
            sor = document.createElement("td")
            //sor.value(i+1)
            oszlop.append(sor);
        }
        table.append(oszlop);
    }
    let srotores = document.createElement("hr")
    
    container.append(table);
    container.append(srotores);
}

function Keret()
{
    
    let border = Number(document.getElementById("border_width").value);
    let osszesTabla = document.querySelectorAll("#container > table")
    let utolsoTabla = osszesTabla[osszesTabla.length-1]
    let tabla = utolsoTabla.querySelectorAll("td")
    for(let i = 0; i<tabla.length;i++)
    {
        tabla[i].style.border = border + "px solid black";
    }
}


function collapse()
{
    let osszesTabla = document.querySelectorAll("#container > table")
    let utolsoTabla = osszesTabla[osszesTabla.length-1]
    let tabla = utolsoTabla.querySelectorAll("td")
    let checkboz = document.getElementById("collapse");
    if(checkboz.checked == true)
    {
        utolsoTabla.style.borderCollapse = "collapse";
    }
    
}