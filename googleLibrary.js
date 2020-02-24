window.GoogleTable = (link, template, node, tabs = false) => {
    let formatData = data => {
        let arrayData = [];
        let tabsNode = data.querySelectorAll('#sheet-menu > li');
        let tables = data.querySelectorAll('tbody');

        tables.forEach((table, index) => {

            let objectTable = tabs ? { tab: tabsNode[index].innerText, data: [] } : { tab: null, data: [] }
            let trArray = table.querySelectorAll('tr');
            let properties = trArray[0].querySelectorAll('td');
            let obj = {};

            properties.forEach(td => {
                obj[td.innerText] = null
            })

            trArray.forEach((tr, index_tr) => {
                let tdArray = tr.querySelectorAll('td');

                if (index_tr > 0) {
                    tdArray.forEach((td, index) => {

                        if (td.innerText.length === 0) {
                            obj[properties[index].innerText] = obj[properties[index].innerText];
                        } else {
                            obj[properties[index].innerText] = td.innerText;
                        }

                    })
                    objectTable.data.push({...obj })
                }
            })

            arrayData = [...arrayData, objectTable]
        });

        return arrayData;
    }

    let render = (template, data, tabs) => {
        let tabsView  = '<div class="row__buttons">';
        let result = '';

        let count = template.match(/\{\{[a-z]{0,100}\}\}/g);

        data.forEach((element, index) => {
            
            let replaceView = ()=>{
                for (let i = 0; i < element.data.length; i++) {
                    let work = template;
             
                    count.forEach((st,index) => {
                        work = work.replace(new RegExp(st, "g"), str => eval(`element.data[${i}].` + str.replace(/[\{\{\}\}]/g, '')))
                    })
                    result += work;
                } 
            }

            if(tabs){
                tabsView += `<div data-button="${index}">${element.tab}</div>`;
         
                result += `<div data-block="${index}" class="row__blocks">
                                <div class="line__block">`;

                                replaceView();
                                
                result +=  `</div></div>`;
            }else{
                if(element.data.length !== 0){
                    replaceView();
                }
            }
            
        });

        tabsView += `</div>`
        document.querySelector(node).innerHTML = tabs ? tabsView + result : result;
    }

    fetch(link)
        .then(res => res.text())
        .then(data => {
            let dom = document.createElement('div');
            dom.innerHTML = data;
            render(template, formatData(dom), tabs)
        })
}