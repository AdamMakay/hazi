

function TablaLetrehozasa()
{
    let container = document.getElementById("container");
    let table = document.createElement("table");
    let sorok = Number(document.getElementById("rows").value);
    let oszlopok = Number(document.getElementById("columns").value);
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
            table.append(oszlop);
        }
    }
    container.append(table);
}